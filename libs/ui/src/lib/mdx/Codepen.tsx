export type CodepenProps = {
  id: string;
  user: string;
};

export function Codepen({ id, user = 'zg_dev' }: CodepenProps) {
  return (
    <div className="my-12">
      <iframe
        className="w-full h-[500px]"
        scrolling="no"
        title={`Pen ${id} by ${user}`}
        src={`https://codepen.io/${user}/embed/${id}`}
        frameBorder="no"
        loading="lazy"
        allowTransparency
        allowFullScreen
      />
    </div>
  );
}
