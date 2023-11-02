import java.util.Scanner;

public class QuestionService {
    Question[] questions = new Question[5];
    String[] selection = new String[5];

    public QuestionService() {
        questions[0] = new Question(1, "Size of int", new String[] { "2", "6", "8", "10" }, "2");
        questions[1] = new Question(2, "Size of char", new String[] { "2", "6", "8", "10" }, "2");
        questions[2] = new Question(3, "Size of long", new String[] { "2", "6", "8", "10" }, "2");
        questions[3] = new Question(4, "Size of string", new String[] { "2", "6", "8", "10" }, "2");
        questions[4] = new Question(5, "Size of boolean", new String[] { "2", "6", "8", "10" }, "2");
    }

    public void playQuiz() {
        int i = 0;
        for (Question q : questions) {
            System.out.println("Question NO: " + q.getId());
            System.out.println(q.getQuestion());

            for (String opt : q.getOptions()) {
                System.out.println(opt);
            }
            Scanner scanner = new Scanner(System.in);
            selection[i] = scanner.nextLine();
            i++;
        }

        for (String selection : selection) {
            System.out.println(selection);
        }
    }

    public void calcScore() {
        int score = 0;

        for (int i = 0; i < questions.length; i++) {
            String answer = questions[i].getAnswer();
            String userAnswer = selection[i];

            if (answer.equals(userAnswer)) {
                score++;
            }

        }
        System.out.println("Your score is " + score);
    }

}
