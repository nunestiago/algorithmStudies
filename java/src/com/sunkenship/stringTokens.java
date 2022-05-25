package com.sunkenship;

import java.util.Scanner;

public class stringTokens {
    public static void main(String[] args) throws Exception {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        Scanner sc = new Scanner(System.in);
        String maxDigit = sc.nextLine();
        sc.close();
        String strMax = maxDigit + maxDigit + maxDigit + maxDigit;
        Integer intMax = Integer.parseInt(strMax);

        for (int i = 1000; i <= intMax; i++) {

            Boolean toSum = true;

            for (int j = 0; j < strMax.length(); j++) {
                int x = strMax.charAt(j) - '0';
                int y = Integer.parseInt(maxDigit);
                if (x > y) {
                    toSum = false;
                    break;
                }
            }

            if (toSum) {
                Integer sum = 0;
                for (int k = 0; k < strMax.length(); k++) {
                    int z = strMax.charAt(k) - '0';
                    sum += z;
                }
                if (sum == 21) {
                    System.out.println(i);
                }
            }


        }


    }
}