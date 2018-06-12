package servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.sql.*;

import db.Db;

public class ServletTest extends HttpServlet{
	
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.setContentType("text/html;charset=utf-8");          
        /* 设置响应头允许ajax跨域访问 */  
        resp.setHeader("Access-Control-Allow-Origin", "*");  
        /* 星号表示所有的异域请求都可以接受， */  
        resp.setHeader("Access-Control-Allow-Methods", "GET,POST");  
       
        PrintWriter printWriter = resp.getWriter();
        printWriter.flush();
        //从数据库取值
        Connection connection = Db.getConnection();
        String sql = "select * from math";
        try {
        	Statement statement = connection.createStatement();
			ResultSet resultSet = statement.executeQuery(sql);
			printWriter.println("[");
			while (resultSet.next()) {
				System.out.print(resultSet.getObject(2));
				if (!resultSet.isLast()) {
					System.out.println(",");
				}
				printWriter.print(resultSet.getObject(2));
				if (!resultSet.isLast()) {
					printWriter.println(",");
				}
			}
			printWriter.println("]");
			printWriter.flush();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
        
	}
	
	
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(req, resp);
	}
}
