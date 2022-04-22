type TruncateProps = {
  content: string;
  length: number;
  dots?: boolean;
};

export const truncate = ({
  content,
  length,
  dots = true,
}: TruncateProps) =>
  content.length > length
    ? content.substring(0, length) + (dots ? '...' : '')
    : content;
