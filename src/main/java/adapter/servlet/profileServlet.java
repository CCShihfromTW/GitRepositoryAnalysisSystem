package adapter.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import domain.Account;
import org.json.JSONObject;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/userProfile", name = "profileServlet")
public class profileServlet extends HttpServlet{
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        JSONObject jsonObject = new JSONObject();
        // import SQL ORM
        JSONObject requestBody = new JSONObject(request.getReader().readLine());
        Account account = new Account(
                requestBody.getString("name"),
                requestBody.getString("password")
        );

        // send back

        request.setAttribute("result", jsonObject);
        response.setContentType("text/json");
        PrintWriter out = response.getWriter();
        out.println(jsonObject) ;
        out.close();
    }

}
