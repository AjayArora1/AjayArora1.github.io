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


