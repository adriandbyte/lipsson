type SecondaryButtonProps = {
    label: string;
};
export default function SecondaryButton({ label }: SecondaryButtonProps) {
    return (
        <button className="bg-transparent text-white border-4 border-[#EA154D] p-2 rounded-full w-32 lg:w-48  hover:underline hover:decoration-blue-700">
            {label}
        </button>
    );
};

