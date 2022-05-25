package com.sunkenship;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner in = new Scanner(System.in);
        int a = in.nextInt();
        int max = (a * 1000) + (a * 100) + (a * 10) + a;
        int counter = 0;
        for (int i = 1000; i <= max; i++) {
            String num = Integer.toString(i);
            Boolean toSum = true;
            for (int j = 0; j < num.length(); j++) {
                int k = num.charAt(j) - '0';
                if (k > a) {
                    toSum = false;
                    break;
                }
            }

            if (toSum) {
                Integer sum = 0;
                for (int k = 0; k < num.length(); k++) {
                    int z = num.charAt(k) - '0';
                    sum += z;
                }
                if (sum == 21) {
                    System.out.println(i);
                    counter++;
                }
            }

        }
        if (counter == 0) {
            System.out.println("null");
        }

    }
}
