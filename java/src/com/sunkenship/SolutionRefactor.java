package com.sunkenship;

import java.util.Scanner;

public class SolutionRefactor {
    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        int maxDigit = in.nextInt();
        in.close();
        if (maxDigit <= 5) System.out.println("null");
        int max = maxDigit * 1111;

        for (int i = 1677; i <= max; i++) {
            String num = Integer.toString(i);
            forSum21Print(i, num);
        }
    }

    private static void forSum21Print(int i, String num) {
        int sum = 0;
        for (int k = 0; k < num.length(); k++) {
            int digitToSum = num.charAt(k) - '0';
            sum += digitToSum;
        }
        if (sum == 21) {
            System.out.println(i);
        }
    }

}