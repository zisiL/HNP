using System;

namespace Twitter1
{
    class Program
    {
        public static void PrintTriangle(int width, int length)
        {
            int number_types_inner_lines = width / 2 - 1;
            int number_inner_lines = (length - 2) / number_types_inner_lines;
            int addition_to_first_line = (length - 2) % number_types_inner_lines;
            int l = 0;
            int i = 0;
            for (i = 1; i <= width; i += 2)
            {
                if (i == 1 || i == width)

                    l = 1;

                else if (i == 3)

                    l = number_inner_lines + addition_to_first_line;
                else
                    l = number_inner_lines;


                for (int j = 0; j < l; j++)
                {
                    int g = width / 2 - (i / 2);
                    for (int m = 0; m < g; m++)
                    {
                        Console.Write(" ");
                    }
                    for (int k = 0; k < i; k++)
                    {
                        Console.Write("*");
                    }
                    Console.WriteLine();
                }
            }
        }
        public static int GetWidth()
        {
            Console.WriteLine("insert width");
            return int.Parse(Console.ReadLine());
        }
        public static int GetLength()
        {
            Console.WriteLine("insert length");
            return int.Parse(Console.ReadLine());
        }
        public static double TrianglePerimeter(int width, int length)
        {
            double legLength;
            legLength = Math.Sqrt(Math.Pow(length, 2) + Math.Pow(width / 2, 2));
            return legLength * 2 + width;
        }

        static void Main(string[] args)
        {
            int type = 1;
            int width;
            int length;
            while (!(type == 3))
            {
                Console.WriteLine("insert type 1 ore 2 or 3 to exit");
                type = int.Parse(Console.ReadLine());
                switch (type)
                {
                    case 1:
                        width = GetWidth();
                        length = GetLength();
                        if (width == length || Math.Abs(length - width) > 5)
                        {
                            Console.WriteLine(width * length);
                        }
                        else
                        {
                            Console.WriteLine((width + length) * 2);
                        }
                        continue;
                    case 2:
                        width = GetWidth();
                        length = GetLength();
                        Console.WriteLine(TrianglePerimeter(width, length));
                        if (width % 2 == 0 || length * 2 < width)
                            Console.WriteLine("The triangle cannot be printed");
                        else
                            PrintTriangle(width, length);
                        continue;
                    case 3:
                        continue;
                    default:
                        Console.WriteLine("the input is not valid");
                        continue;

                }
            }
            Console.WriteLine("Exit program");
        }
    }
}