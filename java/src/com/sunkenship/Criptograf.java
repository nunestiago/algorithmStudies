package com.sunkenship;
public class Criptograf {

    /**
     * Coloca os caracteres X posiçoes a frente com relaçao a tabela ascII
     * @param - string contendo o texto a ser modificado.
     * @return (String) texto modificado
     * @See https://www.treinaweb.com.br/blog/uma-introducao-a-ascii-e-unicode/
     */
    public String criptografar(String entrada) {

      if (entrada == ("")) {
        throw new IllegalArgumentException("O texto não pode estar vazio");
      }

      String senha = "theCoyote";
      int regra = 3;
      String texto = entrada.concat(senha);
      String[] palavras = texto.toLowerCase().split(" ");
      String retorno = "";

      for (String palavra : palavras) {

        String result = "";

        for (int i = 0; i < palavra.length(); i++) {

          if (((int) palavra.charAt(i) > 47) && ((int) palavra.charAt(i) < 58)) {
            result = result + ((char) palavra.charAt(i));
          } else {

            int letraASCII = ((int) palavra.charAt(i)) + regra;
            if (letraASCII > 126)
              letraASCII -= 94;
            result = result + ((char) letraASCII);

          }
        }

        retorno = retorno + result + " ";

      }

      return retorno.toLowerCase().trim();
    }
      

    /**
     * 
     * Modifica o texto com X posilçoes anteriores usando a tabela ascII
     * @param - string contendo o texto a ser modificado.
     * @return (String) texto modificado
     * @See https://www.treinaweb.com.br/blog/uma-introducao-a-ascii-e-unicode/
     */
    public String descriptografar(String entrada) {
    	
        if (entrada == "") {
            throw new IllegalArgumentException("O texto não pode estar vazio");
        }
        
        String senha = "theCoyote";
        int regra = 3;
        String texto = entrada.concat(senha);
        String[] palavras = texto.toLowerCase().split(" ");
        String retorno = "";
        
        for (String palavra : palavras) {
        	
            String result = "";
            
            for (int i = 0; i < palavra.length(); i++) {
            	
                if (((int) palavra.charAt(i) > 47) && ((int) palavra.charAt(i) < 58)) {
                	
                    result = result + ((char) palavra.charAt(i));
                    
                } else {
                	
                    int letraASCII = ((int) palavra.charAt(i) - regra);                    
                    if (letraASCII < 32) letraASCII += 94;
                    result = result + ((char) letraASCII);
                    
                }
            }
            
            retorno = retorno + result + " ";
            
        }
        
        return retorno.toLowerCase().trim();
        
    }

    public String invertText() {
      
      return "";
    }

    public String addRodonNumer(String entrada) {


      return "";
    }


  }