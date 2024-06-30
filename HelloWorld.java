import java.util.Scanner;

public class HelloWorld
{
  public static void main(String[] args)
  {
    Scanner sc = new Scanner(System.in);
    System.out.println("Hello World");
    int a=5,b=6;
    System.out.println(a == b);
    System.out.println(a != b);
    System.out.println(a > b);
    System.out.println(a < b);
    System.out.println(a >= b);
    System.out.println(a <= b);

    // logical operators
    boolean x = true;
    boolean y = false;
    System.out.println(x && y); //AND
    System.out.println(x || y); //OR
    System.out.println(!x); //NOT

    // Assignment operators
    a = 10;
    System.out.println(a);
    // a = a + 5;
    a += 5;
    System.out.println(a);
    // a = a - 5;
    a -= 5;
    System.out.println(a);
    // mul div mod
    a *= 5;
    System.out.println(a);
    a /= 5;
    System.out.println(a);
    a %= 5;
    System.out.println(a);

    // Primitive data types
    // Integer types
    byte byteVar = 10;
    short shortVar = 100;
    int intVar = 1000;
    long longVar = 100000L;
    // floating point
    float floatVar = 10.5f;
    double doubleVar = 100.75;
    // character type
    char charVar = 'A';
    // boolean type
    boolean boolVar = true;

    // Non-Primitive data types
    // String
    String greeting = "Hello, World!";
    System.out.println(greeting);
    // array
    int[] numbers = { 1, 2, 3, 4, 5 };
    System.out.println(numbers[0]);
    numbers[0] = 10;
    System.out.println(numbers[0]);
    int age = sc.nextByte();
  }
}

