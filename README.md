## Hello, I'm Ajay Arora. I'm a software developer.

I have been programming since 2018, and have loved every second of it.

In 2019, I enrolled in the Bachelor of Computing Science program at Thompson Rivers University. Since then, I have acquired a two-year diploma in Computing Science, and I am currently working towards both my Bachelor's Degree and another two-year diploma in IT & Management. I expect to complete these programs by 2022.

Below is a portfolio consisting of the projects I am particularly proud of creating.

My stack includes:
- Java
- Python
- C#
- Visual Basic
- HTML
- CSS
- JavaScript and JQuery

I am also familiar with Windows, Linux, and MacOS operating systems.

## My Work

### Java

One time, my family and I wanted to play a board game that required three custom dice. We did not have these dice, so my family challenged me to make a program that could simulate the dice roll.

    import java.util.Random;
    public class StockTickerDice {
	
		static String sName[] = {"Gold", "Silver", "Bonds", "Oil", "Industrial", "Grain"};
		static int sValue[] = {5,10,15,20};
		static String sAction[] = {"Up", "Down", "Pays"};
		static int stockName = new Random().nextInt(sName.length);
		static int stockValue = new Random().nextInt(sValue.length);
		static int stockAction = new Random().nextInt(sAction.length);
		
		public static void main(String[] args) {
        	System.out.println(String.valueOf(sName[stockName]) + " " + String.valueOf(sAction[stockAction]) + " " + String.valueOf(sValue[stockValue]));
        }	
    }
    
Afterwards, we had a spare android tablet that we wanted to import the dice simulator onto, so I got onto Android Studio and made a UI for it, then exported it onto the device. We can now play the board game (it's called Stock Ticker) with ease! I even added a section to switch one of the dice from stocks to cryptocurrency!

![image](https://user-images.githubusercontent.com/83846945/120906003-34f3c000-c613-11eb-84e0-a8e292100f57.png)



### Python

This program is a reddit bot that analyzes a particular reddit page for posts using keywords, and can reply to posts with any phrase you would like.

![image](https://user-images.githubusercontent.com/83846945/120905495-9e71cf80-c60f-11eb-94d5-dca469a563d2.png)

    import praw

    userAgent = 'Bot Name'
    cID = [insert bot id supplied by reddit here]
    cSC = [insert bot id supplied by reddit here]
    userName = [insert username here]
    userPassword = [insert password here]
    numFound = 0
    reddit = praw.Reddit(user_agent=userAgent, client_id=cID,
                        client_secret=cSC, username=userName,
                        password=userPassword)

    #any subreddit you want to monitor.
    subreddit = reddit.subreddit('askreddit') 

    #phrase the bot uses.
    bot_phrase = 'Let me answer this question, with another question\n\nHow much sawdust can you put into a Rice Krispie Treat before people start to notice?'

    #makes a set of keywords to find in subreddits
    keywords = {'the', 'of', 'reddit'}

    #this views the top 10 posts in that subbreddit
    for submission in subreddit.new(limit=10):
            #makes the post title lowercase so we can compare our keywords with it.
            n_title = submission.title.lower()
            for i in keywords: #goes through our keywords
                    if i in n_title: #if one of our keywords matches a title in the top 10 of the subreddit
                            numFound = numFound + 1
                            print('Bot replying to: ') #replies and outputs to the command line
                            print("Title: ", submission.title)
                            print("Text: ", submission.selftext)
                            print("Score: ", submission.score)
                            print("---------------------------------")
                            print('Bot saying: ', bot_phrase)
                            print()
                            submission.reply(bot_phrase)
    if numFound == 0:
            print()
            print("Sorry, didn't find any posts with those keywords, try again!")



### C#

I made this program in 2020. It is called "Preferred Customer." It takes a customer's ID number as an input from a text file, and supplies information on that customer, including their personal info, how much they have spent at a company, and if they are subscribed to an email list or not. This would be useful for corporations that wish to save customer info for targeted marketing or similar practices.

![image](https://user-images.githubusercontent.com/83846945/120904492-d83fd780-c609-11eb-8b0e-cd268bf1d063.png)

PreferredCustomer.cs

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace Preferred_Customer_Class
    {
        public class PreferredCustomer : Customer
        {
            //Gets variables from the Customer and Person classes.
            public PreferredCustomer(string cname, string caddress, string cphone, string cID,
                string cemail, int cspentAmount, bool conEmailList)
                : base(cname, caddress, cphone, cID, cemail, cspentAmount, conEmailList)
            {
                DiscountAmt = CalcDiscountAmt();
            }
            public decimal DiscountAmt;

            //Calculates the discount the customer receives.
            public decimal CalcDiscountAmt()
            {
            
            if (AmountSpent <= 500) //Discount for purchases <500$
            {
                DiscountAmt = 0;
                return 0;
            }
            else if (501 <= AmountSpent && AmountSpent <= 1000) //Discount for purchases between 500 and 1000
            {
                DiscountAmt = 0.05m;
                return 0.05m;
            }
            else if (1001 <= AmountSpent && AmountSpent <= 1500) //Discount for purchases between 1000 and 1500
            {
                DiscountAmt = 0.06m;
                return 0.06m;
            }
            else if (1501 <= AmountSpent && AmountSpent <= 2000) //Discount for purchases between 1500 and 2000
            {
                DiscountAmt = 0.07m;
                return 0.07m;
            }
            else if (AmountSpent >= 2001) //Discount for purchases >2000
                DiscountAmt = 0.1m;
                return 0.1m;
        }
        
            public override string ToString()
            {
                //How the customer info is displayed in the console. Separated by colons (:)
                return String.Format(
                    "\nCustomer Number (ID): {0}; " + "Discount Amount = " + DiscountAmt*100 + " % " + "\n\nCustomer's Name: {1}\n\nAmount Spent: {2:C2}, \n\n" +
                    "Customer's Phone Number: {3}\n\nCustomer's Email Address: {4}\n\nCustomer's Address: {5}\n\n" +
                    "Is this customer on the email list?: {6}\n\n",
                    //variables are assigned to each index in the string.
                    custNumber, custName, AmountSpent, custPhone, custEmail, Address, OnMailingList
                    );
            }
            
            public override double Amount()
            {
                //In CustomerData2.txt, the amount each customer has spent will be
                //subtracted by the discount they have.
                return base.Amount() - (AmountSpent * (double)DiscountAmt);
            }
        }
    }
    
Data.cs

    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Text;

    namespace Preferred_Customer_Class
    {
        public class Data
        {
            //Preferred Customer Array
            public static PreferredCustomer[] preferred;
            //input ID
            public static string enterCustomerID;
            public static void ReadCustomerData()
            {
                //read text file
                using (var CustomerDetailReader = new StreamReader("CustomerDetails.txt"))
                {
                    var ind = 0; //holds index for each customer
                    preferred = new PreferredCustomer[5]; //5 customers in the txt file.
                    while (!CustomerDetailReader.EndOfStream)
                    {
                        //lines into array
                        var InfoLine = CustomerDetailReader.ReadLine().Split(':');
                        var custName = InfoLine[0];
                        var custAddress = InfoLine[1];
                        var custPhone = InfoLine[2];
                        var custID = InfoLine[3];
                        var custEmail = InfoLine[4];
                        var custAmountSpent = Convert.ToInt32(InfoLine[5]);
                        var custOnMailingList = Convert.ToBoolean(InfoLine[6]);

                        preferred[ind] = new PreferredCustomer(custName, custAddress, custPhone, custID, custEmail, custAmountSpent, custOnMailingList);
                        ind++; //Increment customer info on list.
                    }
                }
            }
            public static void SelectInput()
            {
                //User can choose 0 to display the customer's info.
                Console.WriteLine("\n0. Display Customer Info\n");
                Console.WriteLine("Please enter '0': ");
            }

            //get ID
            public static int ReadCustomerID()
            {
                enterCustomerID = "";
                do
                {
                    var custInd = 0;
                    Console.Write("Please enter a valid Customer Number (Found in CustomerDetails.txt): ");
                    //ID is then read from user's input.
                    enterCustomerID = Console.ReadLine();

                    //If the ID is valid, returns customer info.
                    //If the ID is not valid, an error message will be displayed.
                    foreach (var id in preferred)
                    {
                        if (id.custNumber == enterCustomerID)
                        {
                            return custInd;
                        }
                        if (id.custNumber != enterCustomerID)
                        {
                            custInd++;
                        }
                    }
                    //If an invalid customer number is entered.
                    Console.Write("This Customer Number is Invalid. ");
                } while (true);
            }

            public static string Choice()
            {
                var inputChoice = Console.ReadLine();
                //Checks if 0 is entered. If not, then an error is displayed.
                while (inputChoice != "0")
                {
                    Console.WriteLine("Invalid Data. Please enter '0'.");

                    //Allows user to enter a valid value if an invalid one is entered initially.
                    SelectInput();
                    inputChoice = Console.ReadLine();
                }
                return inputChoice;
            }
        }
    }
    
Program.cs

    using System;
    namespace Preferred_Customer_Class
    {
        class Program
        {
            static void Main(string[] args)
            {
                do
                {
                    //Asks for input of the Customer Number in the text file.
                    Data.ReadCustomerData();
                    var custInd = Data.ReadCustomerID();
                    Data.SelectInput();

                    //Supplies data about the customer or updates it, based on input.
                    if (Data.Choice() == "0")
                        Console.WriteLine(Data.preferred[custInd].ToString());
                } while (true);
            }
        }
    }
    
Customer.cs

    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;
    using System.Threading.Tasks;

    namespace Preferred_Customer_Class
    {
        public class Customer : Person
        {
            public Customer(string cname, string caddress, string cphone, string cID, string cemail,
                int cspentAmount, bool conEmailList)
                : base(cname, caddress, cphone)
            {   //Customer Variables
                custNumber = cID;
                OnMailingList = conEmailList;
                AmountSpent = cspentAmount;
                custEmail = cemail;    
            }   //Getting/Setting Customer Variables
            public string custNumber { get; set; }
            public bool OnMailingList { get; set; }
            public int AmountSpent { get; set; }
            public string custEmail { get; set; }
            //Amount Spent to Double (Two decimal places)
            public virtual double Amount()
            {
                return AmountSpent;
            }
        }
    }
    
Person.cs
    
    namespace Preferred_Customer_Class
    {
        public class Person
        {
            public Person(string cname, string caddress, string cphone)
            {   //Person Variables
                custName = cname;
                custPhone = cphone;
                Address = caddress;
            }   //Getting/Setting Person Variables
            public string custName { get; set; }
            public string custPhone { get; set; }
            public string Address { get; set; }    
        }
    }



### Visual Basic

This is one of my first programming projects. I created this in 2018 in using Visual Studio. It is a simple web browser clone.

![image](https://user-images.githubusercontent.com/83846945/120902248-7036c480-c5fc-11eb-9e28-6cb7ce4546e9.png)



    Public Class frmBrowser
        'declarations
        Private rWidthMax As Integer
        Private rHeightMax As Integer

        Private Sub frmBrowser_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
            'expand form to full screen width
            Dim maxWindowSize As System.Drawing.Rectangle
            Dim aSize As Size

            Me.MaximizedBounds = Screen.GetWorkingArea(maxWindowSize)
            aSize.Height = Me.MaximizedBounds.Height
            aSize.Width = Me.MaximizedBounds.Width
            Me.Size = aSize
            rWidthMax = Me.Width
            rHeightMax = Me.Height
            btnGo.Left = Me.Width - 95
            txtURL.Width = Me.Width - 151
        End Sub

        Private Sub ExitToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles ExitToolStripMenuItem.Click
            'close the program
            Me.Close()
        End Sub

        Private Sub OpenToolStripMenuItem_Click(sender As Object, e As EventArgs) Handles OpenToolStripMenuItem.Click
            'enables user to enter URL
            Dim strURL As String
            strURL = InputBox("Enter the desired URL:", "Find URL")
            WebBrowser1.Navigate(strURL)
        End Sub

        Private Sub btnGo_Click(sender As Object, e As EventArgs) Handles btnGo.Click
            'opens the website
            WebBrowser1.Navigate(txtURL.Text)
        End Sub
    End Class



### HTML, CSS, JavaScript, JQuery (Web Development Work)

In 2021 I was hired by a company to redesign their website. I will not be sharing the source code for it, but I do have permission from them to share my work on my portfolio. The website is CentennialMats.com. I ended up redesigning the 15 pages of their website, as well as designing the UI for both desktop and mobile devices.

![image](https://user-images.githubusercontent.com/83846945/120906104-f1e61c80-c613-11eb-9a6f-3bb4b7e29ca1.png)

![image](https://user-images.githubusercontent.com/83846945/120906135-32459a80-c614-11eb-97f3-f2c2df52fb57.png)

![image](https://user-images.githubusercontent.com/83846945/120906163-615c0c00-c614-11eb-8a73-311148a7f205.png)


