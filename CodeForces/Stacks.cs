using System;

// Giving a string of brackets "{{}}{}{}}" determine if the brackets are balanced.

namespace Stacks
{
    class Program
    {
        static void Main(string[] args)
        {
            string brackets = "{{}}{}{}}";
            Console.WriteLine(IsBalanced(brackets));
        }

        private static bool IsBalanced(string inputString)
        {
            Stack<char> stackOfClosingBraces = new Stack<char>();
            Stack<char> stackOfOpeningBraces = new Stack<char>();

            foreach (char c in inputString)
            {
                if (c == '}' || c == ']' || c == ')')
                {
                    stackOfClosingBraces.Push(c);
                }
            }

            for (int i = inputString.Length - 1; i >= 0; i--)
            {
                if (inputString[i] == '{' || inputString[i] == '[' || inputString[i] == '(')
                {
                    stackOfOpeningBraces.Push(inputString[i]);
                }
            }

            if ((stackOfClosingBraces.Count + stackOfOpeningBraces.Count) % 2 != 0)
            {
                return false;
            }

            while (stackOfClosingBraces.Count != 0)
            {
                char currentClosingBrace = stackOfClosingBraces.Pop();
                char stackOfOpeningBrace = stackOfOpeningBraces.Pop();

                if ((currentClosingBrace == '}' && stackOfOpeningBrace == '{') ||
                    (currentClosingBrace == ']' && stackOfOpeningBrace == '[') ||
                    (currentClosingBrace == ')' && stackOfOpeningBrace == '('))
                {
                    continue;
                }
                else { return false; }
                return true;
            }
        }
    }
}