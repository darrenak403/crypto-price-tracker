export declare class CryptoPriceTracker {
    private ws;
    private symbol;
    private lastPrice;
    private priceInterval;
    start(): Promise<void>;
    private connectWebSocket;
    private startPriceSaving;
    stop(): void;
}
//# sourceMappingURL=price-tracker.d.ts.map