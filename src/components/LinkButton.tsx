import React from "react";

type LinkButtonProps = {
  href?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  ...delegated
}: LinkButtonProps) => {
  const Tag = typeof href === "string" ? "a" : "button";

  return (
    <Tag style={styles} href={href} {...delegated}>
      {children}
    </Tag>
  );
};

const styles = {
  padding: 8,
  margin: 4,
  borderRadius: 4,
};
