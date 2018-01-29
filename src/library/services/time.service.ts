import { Injectable } from '@angular/core';

/**
 * Example libary that returns the current time
 */
@Injectable()
export class TimeService {
  constructor() {
    this.date = new Date();
  }

  private date: Date;

  public getCurrentTime(): string {
    return this.date.toLocaleTimeString();
  }
}
