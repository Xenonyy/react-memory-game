import type { messages } from '../messages/messages';

export type ModalTypes = keyof typeof messages.modal;

export type ResultTypes = ModalTypes | '';
