import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeftShort } from 'react-icons/bs';

export default function About() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-screen-md">
        <Link href="/">
          <div className="flex items-center cursor-pointer hover:opacity-80">
            <BsArrowLeftShort className="w-6 h-6" />
            <span>Home</span>
          </div>
        </Link>
        <h1>About me</h1>
        <div className="float-right w-[250px]">
          <Image
            src="https://media.zachgollwitzer.com/zach-bethany-hawaii.jpg"
            alt="me in hawaii"
            layout="responsive"
            width={4032}
            height={3024}
            className="shadow-lg rounded-lg"
          />
        </div>
        <p className="w-2/3">
          Welcome to my online home! This site is an ongoing work-in-progress,
          and I'm still overdue for a re-write of this about page. Nevertheless,
          here's a short synopsis of who I am and some of the things I enjoy.
          I'm{' '}
          <a href="https://www.twitter.com/zg_dev">pretty active on Twitter</a>,
          so feel free to hit me up there!
        </p>

        <h2>My life in 30 seconds</h2>
        <ul>
          <li>Grew up in St. Louis, MO</li>
          <li>
            Played{' '}
            <a href="https://gozips.com/sports/mens-golf/roster/zach-gollwitzer/1916">
              collegiate golf at the University of Akron
            </a>{' '}
            from 2013-2017 (unfortunately, Akron's golf team was cut during the
            2020 pandemic, hoping to see it reinstated soon!)
          </li>
          <li>
            Moved to Cleveland, OH in 2018 and soon married my wife, Bethany in
            2020
          </li>
          <li>Recently moved to Cincinnati, OH</li>
          <li>
            Currently working at Maybe Finance, building modern financial
            planning tools for people who want to break the barriers of
            traditional finance and achieve their biggest financial goals. I
            know, a bit sales-pitchy, but seriously, this product is awesome.{' '}
            <a href="https://www.maybe.co">You should check it out</a>.
          </li>
        </ul>
        <h2>My favorite things to do</h2>
        <ul>
          <li>
            <a href="https://twitter.com/zg_dev/status/1409999752071159809?s=20&t=VPwoM0uIdYOTRhMskEHIHA">
              I love to run
            </a>
            . Ran my first marathon last year and was extremely humbled to find
            out that breaking 4 hours is a lot harder than I thought! Finished
            it in 4:16, will definitely be back for another try soon.
          </li>
          <li>
            I enjoy reading, mostly nonfiction (although I'm trying to
            incorporate more fiction into my life). I used to keep a reading
            list on this blog, but still looking for where I put that...
            Anyways, I'm a sucker for long biographies and history.
          </li>
          <li>
            I'm lucky to say that I really enjoy the work I do. Building things
            on computers has become an enjoyable past-time for me. I'm mostly in
            the JavaScript world for now, but enjoy learning just about any
            technology you put in front of me, and especially enjoy{' '}
            <a href="https://www.youtube.com/c/ZachGollwitzer">
              teaching things that I've learned on YouTube
            </a>
            .
          </li>
        </ul>
      </div>
    </div>
  );
}
