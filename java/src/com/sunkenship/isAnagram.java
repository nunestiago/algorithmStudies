package com.sunkenship;

public class isAnagram {
    public boolean isAnagram() {
        String a = "aaaaa";
        String b = "aa";
        char aa[] = a.toLowerCase().toCharArray();
        char bb[] = b.toLowerCase().toCharArray();
        if(a.length() != b.length()){
            return false;
        }else{
            java.util.Arrays.sort(aa);
            java.util.Arrays.sort(bb);
            return java.util.Arrays.equals(aa, bb);
    }
}}
