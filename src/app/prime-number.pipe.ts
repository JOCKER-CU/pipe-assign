import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeNumber'
})
export class PrimeNumberPipe implements PipeTransform {

  transform(value: number): number[] {
    const primes: number[] = [];
    for (let num = 2; num <= value; num++) {
      if (this.isPrime(num)) {
        primes.push(num);
      }
    }
    return primes;
  }

  private isPrime(num: number): boolean {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
