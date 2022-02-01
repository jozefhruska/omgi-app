type TruncateProps = {
  content: string;
  length: number;
};

export const truncate = ({ content, length }: TruncateProps) =>
  content.length > length ? content.substring(0, length) + '...' : content;
