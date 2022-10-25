type PrimaryButtonProps = {
  label: string;
};
const PrimaryButton = ({ label }: PrimaryButtonProps) => {
  return (
    <button className="bg-[#EA154D] text-white p-2 rounded-full w-32 lg:w-48 hover:opacity-90 hover:bg-white hover:text-[#EA154D] hover:underline">
      {label}
    </button>
  );
};

export default PrimaryButton;
