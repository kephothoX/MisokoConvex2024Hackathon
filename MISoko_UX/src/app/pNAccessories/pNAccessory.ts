export interface PNAccessory {
    _creationTime: number;
    _id: string;
    created_by: string;
    created_at: number;
    updated_at: number;
    name: string;
    specifications: string;
    description: string;
    price_amount: number;
    published: boolean;
    video_link: string;
    ad_phone_number: string;
    ad_email: string;
    ad_images: string[];
    location: string;
}
