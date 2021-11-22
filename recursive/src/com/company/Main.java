package com.company;

public class Main {

    public static void main(String[] args) {
        System.out.println("Factorielle de 8 = " + factoriel(8));
        System.out.println("Factorielle de 7 = " + factoriel(7));
        System.out.println("----------------------------------------");
        System.out.println("Suite de Fibonacci de 8 : " + fibonacci(8));
        System.out.println("Suite de Fibonacci de 9 : " + fibonacci(9));
        System.out.println("----------------------------------------");
        System.out.println("Conjecture de Syracuse de 19 : " + syracuse(15, 10));
        System.out.println("----------------------------------------");
        System.out.println("PGCD de 10 et 20 : "+ pgcd(48*9,48*7));
    }

    public static int factoriel(int nombre) {
        if (nombre == 1) {
            return 1;
        } else {
            return (nombre * factoriel(nombre - 1));
        }
    }

    public static int fibonacci(int nombre) {
        if (nombre > 1) {
            return (fibonacci(nombre - 1) + fibonacci(nombre - 2));
        } else {
            return nombre;
        }
    }

    public static int syracuse(int N, int nombre) {
        if (nombre == 0)
            return N;
        int syr = syracuse(N,nombre-1);
        if ( syr % 2 == 0)
            return syr /2;
        return syr *3 +1;
    }

    public static int pgcd(int a, int b){
        if (b == 0)
            return a;

        int R = a%b;
            return pgcd(b,R);

    }
}
