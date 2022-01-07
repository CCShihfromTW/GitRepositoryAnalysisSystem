package adapter.gitrepository;

import domain.GitRepository;
import usecase.gitrepository.CreateGitRepositoryOutput;

public class CreateGitRepositoryOutputImpl implements CreateGitRepositoryOutput{
    private GitRepository gitRepository;
    public GitRepository getResult() {
        return this.gitRepository;
    }

    public void setResult(GitRepository gitRepository) {
        this.gitRepository = gitRepository;
    }
}
