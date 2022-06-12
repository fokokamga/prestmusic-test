import { environment } from 'src/environments/environment';
import { CompagnyInfos } from './compagny.info';

export class AppConfig {
    private cartName: string = "app_cart";
    private checkoutName: string = "app_checkout";
    private tokenName: string = "jwt_token";
    private stripePublicKey:string = "pk_test_VxN5ADtuZhAWQTejOxJmnlej009a8Da9wH";
    private url: string;

    constructor() { this.url = environment.apiUrl; }

    public getUrl(): string { return this.url; }

    public getApiUrl(): string { return this.getUrl() + "/api/";}

    public getAuthUrl(): string { return this.getApiUrl() + "auth/"; }

    public getTokenName(): string { return this.tokenName; }

    public getCartName(): string { return this.cartName; }

    public getCartCheckoutName(): string { return this.checkoutName;}

    public getStripePublicKey(): string { return this.stripePublicKey;}

    public getCompagnyInfos(): CompagnyInfos {
        return new CompagnyInfos();
    }

}