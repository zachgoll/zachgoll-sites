import Bull from 'bull'

/**
 * MockQueue emulates the Bull library, except instead of using Redis to
 * orchestrate queue jobs, it calls jobs immediately for the purposes of testing.
 */
export const MockQueue = jest.fn().mockImplementation(function (name) {
    return {
        processFnMappings: {}, // Stores all of our `queue.process(name, callback)` callback fns for later execution
        eventMappings: {}, // Stores all of our `queue.on('event', callback)` callback fns for later execution
        name,
        add: async function (jobName, jobData) {
            const job: Partial<Bull.Job<any>> = {
                name: jobName,
                data: jobData,
                queue: this,
            }

            try {
                // Execute the callback assigned to the current job name
                await this.processFnMappings[jobName](job)

                // Execute the `queue.on('success', callback)` callback fns (there can be multiple)
                await Promise.all(this.eventMappings['completed'].map((fn) => fn(job)))
            } catch (err) {
                await Promise.all(this.eventMappings['failed'].map((fn) => fn(job, err)))
            }
        },
        // Register all the job callbacks for later use in `queue.add()`
        process: function (jobName, processFn) {
            this.processFnMappings[jobName] = processFn
        },
        // Register all event handler callbacks for later use in `queue.add()`
        on: async function (event, callback) {
            if (this.eventMappings[event]) {
                this.eventMappings[event].push(callback)
            } else {
                this.eventMappings[event] = [callback]
            }
        },
    }
})
