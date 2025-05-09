import Label from "./Label"

interface InputProps {
    label?: string
    type?: string
    placeholder?: string
    value?: string
    onChange?: (e:any) => void
}

export default function Input({ label, type, placeholder, value, onChange }: InputProps) {
    return (
        <div className="w-full">
            {label && <Label>{label}</Label>}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md
                    shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            />
        </div>
    );
}
