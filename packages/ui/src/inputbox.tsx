"use client";

interface InputBoxProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputBox = ({ 
  placeholder = "Enter text...", 
  value, 
  onChange,
  type = "text" 
}: InputBoxProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px 14px",
        fontSize: "14px",
        border: "1px solid #ccc",
        borderRadius: "6px",
        outline: "none",
        width: "100%",
        maxWidth: "300px",
      }}
    />
  );
};
