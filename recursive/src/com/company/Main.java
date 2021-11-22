package com.company;

public class Main {

    public static void main(String[] args) {
        System.out.println("Factorielle de 8 = " + factoriel(8));
        System.out.println("Factorielle de 7 = " + factoriel(7));
        System.out.println("----------------------------------------");
        System.out.println("Suite de Fibonacci de 8 : " + fibonacci(8));
        System.out.println("Suite de Fibonacci de 9 : " + fibonacci(9));
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
            return (fibonacci(nombre - 1)+fibonacci(nombre - 2));
        } else {
            return nombre;
        }
    }
}
