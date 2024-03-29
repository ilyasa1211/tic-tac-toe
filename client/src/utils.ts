class Utils {
  public static SimulateThinking(
    callback: () => any,
    thinkingkAverageMilisecond: number = 1000
  ): void {
    const offset = thinkingkAverageMilisecond / 5;
    const quartile1 = thinkingkAverageMilisecond - offset;
    const quartile3 = thinkingkAverageMilisecond + offset;

    setTimeout(
      () => callback(),
      this.getRandomIntBetween(quartile1, quartile3)
    );
  }
  public static getRandomIntBetween(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
  }

  public static showAlert(message: string) {
    alertMessage.textContent = message;
    alertContainer.classList.remove("hidden");
  }

  public static createIndexArray(size: number): number[] {
    return new Array(size).fill(null).map((_: null, index: number) => index);
  }

  public static shuffleArray(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }
  //   public static generateUUID(): string {
  //     return crypto.randomUUID();
  //   }
}
