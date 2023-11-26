import Image from "next/image";

export const Tag = ({
  tagName,
  iconLink,
  id,
  color,
  backgroundColor
}: {
  tagName: string;
  iconLink: string;
  id: number;
  color: string;
  backgroundColor: string;
}) => {
  return (
    <div
      className="tag flex px-3 py-1 cursor-pointer"
      style={{ color, backgroundColor }}
      key={id}
    >
      {/* <Image
        src={iconLink}
        alt={tagName}
        width={100}
        height={100}
      /> */}
      <span className="select-none uppercase font-bold text-sm font-bayon">{tagName}</span>
    </div>
  );
};
