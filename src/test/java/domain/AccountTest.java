package domain;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

import domain.Account;

import java.util.List;


public class AccountTest {
    private Account Testaccount;
    @Before
    public void setUp(){
        Testaccount = new Account("Alice","alice@gmail.com","aaa");
    }

    @Test
    public void CreateAccount(){
        Assert.assertEquals("Alice", Testaccount.getName());
        Assert.assertEquals("alice@gmail.com", Testaccount.getAccount());
        Assert.assertEquals("aaa", Testaccount.getPassword());
    }

    @Test
    public void SetAccount(){
        Testaccount.setName("Bob");
        Testaccount.setAccount("bob@hotmail.com");
        Testaccount.setPassword("bbb");
        Assert.assertEquals("Bob", Testaccount.getName());
        Assert.assertEquals("bob@hotmail.com", Testaccount.getAccount());
        Assert.assertEquals("bbb", Testaccount.getPassword());
    }

    @Test
    public void CreateProject(){
        Testaccount.addProject("project1");
        Testaccount.addProject("project2");
        List<String> projects = Testaccount.getProjects();
        Assert.assertEquals("project1", projects.get(0));
        Assert.assertEquals("project2", projects.get(1));
    }
}
