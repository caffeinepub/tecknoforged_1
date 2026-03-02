import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RFQ {
    contactPerson: string;
    productType: string;
    email: string;
    grade: string;
    deliveryTimeline: string;
    timestamp: bigint;
    companyName: string;
    quantityUnit: string;
    quantity: bigint;
    requests: bigint;
    phone: string;
    specialRequirements?: string;
    material: string;
}
export interface ContactMessage {
    name: string;
    timestamp: bigint;
    phone: string;
    contactMessage: string;
}
export interface backendInterface {
    addAdmin(newAdmin: Principal): Promise<void>;
    getAllContactMessages(): Promise<Array<ContactMessage>>;
    getAllRFQs(): Promise<Array<RFQ>>;
    submitContactMessage(name: string, phone: string, message: string): Promise<void>;
    submitRFQ(companyName: string, contactPerson: string, phone: string, email: string, productType: string, material: string, grade: string, quantity: bigint, quantityUnit: string, deliveryTimeline: string, specialRequirements: string | null): Promise<void>;
}
