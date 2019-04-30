export interface Navigator {
    getUserMedia(
        options: {
            video: {
                mandatory: {
                    chromeMediaSource: string,
                    chromeMediaSourceId: any,
                    maxWidth: any,
                    maxHeight: any
                }
            };
            audio?: boolean;
        },
        success: (stream: any) => any,
        error?: (error: string) => void
    ): void;
}
