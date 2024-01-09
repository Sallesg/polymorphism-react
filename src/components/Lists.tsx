type ListProps = {
  as: React.ElementType;
  children: React.ReactNode;
};

const VALID_TAGS = ["ul", "ol"];
export const Lists: React.FC<ListProps> = ({
  as: Tag = "ul",
  children,
  ...delegated
}: ListProps) => {
  if (typeof Tag === "string" && !VALID_TAGS.includes(Tag)) {
    throw new Error(`Invalid tag: ${Tag}`);
  }
  return (
    <Tag style={styles} {...delegated}>
      {children}
    </Tag>
  );
};

const styles = {
  padding: 2,
  border: "2px solid #ddd",
};
