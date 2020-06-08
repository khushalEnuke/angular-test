export enum Gender {
    male = "Male",
    female = "Female",
    other = "Other"
}

export interface Address {
    street: String,
    postCode: String,
    houseNumber: Number
}

export interface Order {
    orderId: String,
    orderDate: Date,
    amount: Number
}

export interface Customer {
    customerId: Number,
    name: String,
    age: Date,
    gender: Gender,
    address: Address[],
    orders: Order[]

}