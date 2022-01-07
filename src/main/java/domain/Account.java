package domain;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

public class Account {
    private String name;
    private String id;
    private String password;
    private String account;
    private List<String> projects;

    public Account(String account, String password) {
        this.id = UUID.randomUUID().toString();
        this.password = password;
        this.account = account;
        projects = new ArrayList<>();
    }

    public Account(String name, String account, String password) {
        this.name = name;
        this.password = password;
        this.account = account;
        projects = new ArrayList<>();

    }

    public Account(String id, String name, String account, String password) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.account = account;
        projects = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void SetId(){
        this.id = UUID.randomUUID().toString();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public void addProject(String id) {
        projects.add(id);
    }

    public List<String> getProjects() {
        return this.projects;
    }
}
