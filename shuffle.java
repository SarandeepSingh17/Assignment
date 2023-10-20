
import java.util.Random;

public class Main
{
	public static void main(String[] args) {
	    int[] arr = {1,2,3,4,5,6,7};
	    solution(arr);
	    for(int i=0;i<arr.length;i++)
	    {
	        System.out.print(arr[i]+" ");
	    }
	    System.out.println();
	}
	static void solution(int[] arr)
	{
	   
	    for(int i=arr.length-1;i>0;i--)
	    {
	        int idx = new Random().nextInt(i+1);
	        //swap
	        int temp = arr[idx];
	        arr[idx] = arr[i];
	        arr[i] = temp;
	    }
	}
}
