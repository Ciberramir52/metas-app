import { ReactNode } from "react";

interface ModalProps {
	children: ReactNode;
}

export function Modal({ children }: ModalProps) {
	return (
		<div className="flex items-center fixed inset-0 bg-gray-500 bg-opacity-75">
			<div className="mx-auto">{children}</div>
		</div>
	);
}
