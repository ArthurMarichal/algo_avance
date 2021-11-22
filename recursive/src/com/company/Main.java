package com.company;

public class Main {

    public static void main(String[] args) {
        System.out.println("Factorielle de 8 = "+factorielle(8));
        System.out.println("Factorielle de 7 = "+factorielle(7));
        System.out.println("Factorielle de 6 = "+factorielle(6));
        System.out.println("Factorielle de 5 = "+factorielle(5));
        System.out.println("Factorielle de 4 = "+factorielle(4));
        System.out.println("Factorielle de 3 = "+factorielle(3));
        System.out.println("Factorielle de 2 = "+factorielle(2));
    }
    public static int factorielle(int nombre){
        if (nombre == 1) {
            return 1;
        } else {
            return (nombre*factorielle(nombre-1));
        }
    }
}
