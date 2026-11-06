---
title: Using the Quiz Module
description: Create and manage quizzes in FluentCommunity to test your students' knowledge, set passing grades, and make your courses more interactive.
---

# Using the Quiz Module

The Quiz Module in FluentCommunity lets you test your students' knowledge easily. You can add quizzes to any course to reinforce key concepts and check comprehension, making your courses more fun and more effective.

This guide shows you how to set up and add quizzes to your course.

::: info Use Case
At the end of a module on "Social Media Marketing," add a short quiz with multiple-choice questions to make sure students have understood the core strategies before they move on to the next section.
:::

## Add a New Quiz

To use quizzes, you first need to create a new course or edit an existing one. If you're not sure how to make a course, see [Creating Your First Course](/creating-your-first-course).

1. Open your course editor.
2. Click the **Add New** button.
3. Select **Quiz** from the dropdown menu.

![Selecting Quiz from the Add New dropdown in the course editor](/images/course-and-learning/using-the-quiz-module/add-new-course-1-scaled.webp)

4. Type your quiz name in the **Quiz Title** pop-up box.
5. Click **Add & Edit** to open the quiz builder.

![Entering a quiz title in the Add Quiz pop-up](/images/course-and-learning/using-the-quiz-module/quiz-title-2.webp)

## Configure Quiz Settings

The right side of the quiz editor holds your settings panel. This is your control center for how the quiz behaves for your learners.

* **Enable Video Embed:** Show a video at the top of your quiz page.
* **Enable Comments:** Allow students to leave comments or ask questions below the quiz.
* **Set a passing grade:** Turn this on to require a specific score to pass. Enter the required percentage (for example, type `80` for 80%).
* **Limit attempts:** Turn this on to cap how many times a student can take the quiz. Enter the number of attempts, for example `3`. You can still give an individual student extra attempts.
* **Set a time limit:** Turn this on to give students a fixed number of minutes, for example `20`. The timer runs on your server, so closing the browser tab doesn't give anyone extra time. When time runs out, whatever the student has answered is submitted.

![The quiz settings panel with Limit attempts set to 3 attempts and Set a time limit set to 20 minutes](/images/course-and-learning/using-the-quiz-module/quiz-time-and-attempt-limit.webp)

* **Hide answers on result page:** Keep the correct answers hidden after a student finishes the quiz. This is useful if you let students retake the test.
* **Quiz Layout:** A long quiz on a single page can feel like a wall of questions. Choose between **All at once**, the classic single page, and **One by one**, which shows one question per screen with a progress bar and **Previous** / **Next** buttons. This only changes how the quiz looks, grading works the same way either way, and the result page still lists every question so students can review the whole quiz.
* **Shuffle answer options:** Shows each question's answer choices in a random order for every student.
* **Shuffle question order:** Shows the questions themselves in a random order for every student. Turn on either shuffle setting and students stop being able to memorize where the right answer sits, your own editing order in the builder stays exactly as you left it.
* **Featured media:** Paste a video URL (YouTube, Vimeo) into the **Embed** tab, or paste code into the **Custom HTML Code** tab to place a video at the top of the quiz.
* **Lesson Duration:** Enter the expected time in minutes and seconds it will take a student to complete the quiz.
* **Featured Image:** Click **Upload Image** to add a thumbnail graphic for your main course page.
* **Documents & Files:** Drag and drop extra materials, like PDF study guides, for students to download before they start.

![The Features Settings panel with Shuffle answer options, Shuffle question order, and the Quiz Layout picker showing All at once and One by one](/images/course-and-learning/using-the-quiz-module/configure-quiz-settings-3-scaled.webp)

![The Quiz Layout picker with One by one selected, describing it as one question per screen with a progress bar and Previous / Next buttons](/images/course-and-learning/using-the-quiz-module/quiz-layout-one-by-one-7b.webp)

## Build Your Questions

The quiz editor is fast, clean, and fully keyboard-accessible, you can add and build entire quizzes without ever touching your mouse.

1. Click the **+ Add Question** button at the bottom of the screen.

![The Add Question button at the bottom of the quiz editor](/images/course-and-learning/using-the-quiz-module/add-question-4-scaled.webp)

2. Choose your question **Type** from the dropdown (see [Question Types](#question-types) below).
3. Use the **Points** stepper to set how much this question counts toward the score. Every question is worth 1 point by default, so you can give harder questions more.
4. Toggle **Image** on if you want to upload a picture at the top of the question.
5. Type your question in the **Question** box.
6. Fill in the responses under **Responses**, the fields shown depend on the Type you picked.

![The Add Question form for a Single Choice question worth 2 points, with the Points stepper highlighted](/images/course-and-learning/using-the-quiz-module/quiz-question-points.webp)

![The Add Question form for a Multiple Choice question, with the Image toggle, More options section, and Enabled toggle highlighted](/images/course-and-learning/using-the-quiz-module/add-question-6-scaled.webp)

7. Click **More options** to expand two optional fields:
    * **Help Text** — a hint shown to students while they're answering.
    * **Explanation (Pro)** — written with the same formatting tools as a post, so it can be more than a one-line note. A score tells a student how they did; an explanation tells them what to learn from it. See [Viewing Explanations](#viewing-explanations) below for how students see it.

![The expanded More options panel showing the Help Text and Explanation fields](/images/course-and-learning/using-the-quiz-module/more-options-8.webp)

8. Use the **Enabled** toggle to control whether the question is live right away.
9. Click **Add Question** to save it to the list.

Repeat this process to add as many questions as your quiz needs.

## Question Types

FluentCommunity supports nine question types, so you can match the format to what you're actually testing.

* **Single Choice:** One correct option. Students pick one answer from the list.
* **Multiple Choice:** Several correct options. Students can select more than one; all correct options must be chosen to get credit.
* **True / False:** Students judge a statement as true or false.
* **Fill in the Blank:** Your question text includes one or more blanks. Students type the missing word or phrase directly into each blank.
* **Ordering:** Give students a list of items in the wrong order. They drag and drop the items into what they believe is the correct sequence.
* **Matching:** Give students two columns of items. They pair each item on the left with the item it matches on the right.
* **Rating Scale:** Students pick a number on a scale, for example 1 to 5. Set the **From** and **To** numbers and add a label for the lowest and highest end, such as "Not helpful" and "Very helpful". There is no right answer and it does not count toward the score, so it works well for asking what students thought of a lesson.
* **Written Answer:** Open or exact-match text, students type a free-form response instead of picking from options. Choose the **Grading Mode**:
    * **Open (any answer accepted):** Any written answer is accepted.
    * **Exact Match (auto-graded):** You provide the expected answer text, and FluentCommunity auto-grades the student's response against it.
    * **Graded by instructor:** You review each answer yourself and give it points. Until you do, the quiz waits for review and does not count as passed. See [Reviewing Written Answers](#reviewing-written-answers).

![A Rating Scale question set from 1 to 5, with a label for the lowest and highest end](/images/course-and-learning/using-the-quiz-module/quiz-rating-scale-question.webp)

![The Written Answer question with the Graded by instructor grading mode selected](/images/course-and-learning/using-the-quiz-module/quiz-written-answer-grading.webp)

### Image Options

For **Single Choice** and **Multiple Choice** questions, toggle **Image options** on under **Responses**. Each option becomes a card: upload an image, add a caption, and tick the correct answer. It is useful when you want students to pick a diagram, a product or a photo.

![A Single Choice question with Image options turned on, showing an Upload image area for each option](/images/course-and-learning/using-the-quiz-module/quiz-image-options.webp)

![The Question Type dropdown, listing Single Choice, Multiple Choice, True / False, and Written Answer with a short description of each](/images/course-and-learning/using-the-quiz-module/add-question-5-scaled.webp)


## Manage and Reorder Questions

It is easy to organize your quiz layout directly from the editor.

* **Reorder Answers:** Grab and move answer choices up or down to change their order.
* **Edit or Delete:** Click the **three-dot menu** next to any question to edit its text, temporarily disable it, or delete it permanently.
* **Duplicate a Question:** Click the **three-dot menu** and select **Duplicate**. This instantly copies the question and its exact answers. The new copy will glow so you spot it instantly, letting you tweak just a few words for your next question.

![Managing questions with the three-dot menu](/images/course-and-learning/using-the-quiz-module/manage-question-6-scaled.webp)

## Save and Preview Your Quiz

When students take the quiz, they will see their results right away after submitting their answers. Always remember to click the dark **Save** button in the top-right corner to keep everything updated.

::: info Non-enrolled students
If a student is not enrolled in the course, the **Submit** button will be disabled. A short message will explain why they cannot submit the form.
:::

::: warning Don't forget
Before students can see or take the quiz, make sure you **publish your quiz questions**.
:::

![The student-facing quiz view showing results after submission](/images/course-and-learning/using-the-quiz-module/save-and-preview-10-scaled.webp)

### Time Limit, Attempts, and Pass Mark

When a quiz has a time limit, an attempt limit, or a passing grade, students see all three before they begin. They see how long they have, which attempt they are on, and the pass mark.

![The quiz start screen showing a time limit of 20 minutes, Attempt 1 of 3, and a Pass 80% pass mark](/images/course-and-learning/using-the-quiz-module/quiz-student-start.webp)

The timer starts when the student clicks **Start Quiz** and keeps running if they leave the page. A **Time left** bar counts down while they answer.

![A quiz in progress with the Time left countdown, a single choice question, a rating scale, and a written answer box](/images/course-and-learning/using-the-quiz-module/quiz-student-taking.webp)

After they submit, the result card shows their score, the points they earned, the time they took, the pass mark, and their attempt count. If they have attempts left, a **Retake Quiz** button appears.

![The result card showing 67 percent, 2 of 3 points, a Pass 80 percent marker, the In review label, and a Waiting for review note on the written answer](/images/course-and-learning/using-the-quiz-module/quiz-result-pending.webp)

### Reviewing Written Answers

A written answer set to **Graded by instructor** can't be scored automatically. The student's result shows **In review** until you grade it, and it never counts as a pass in the meantime.

1. Open your course and go to the **Quiz Results** tab.
2. Click **Needs review** at the top. The button shows how many results are waiting.

![The Quiz Results tab with the Needs review button highlighted next to Export](/images/course-and-learning/using-the-quiz-module/quiz-results-needs-review.webp)

3. Click **View** on a result.
4. Enter the **Points** for each written answer, add optional feedback for the student, and click **Save Grades**.

![The Quiz Result dialog with a Points field and a feedback box under the written answer, and a Save Grades button](/images/course-and-learning/using-the-quiz-module/quiz-result-grade-answers.webp)

Pass or fail follows from the score once every written answer has points.

### One Question at a Time

With **Quiz Layout** set to **One by one**, students see a single question per screen, with a progress bar counting up (e.g. "Question 3 of 6") and **Previous** / **Next** buttons to move between questions.

![A quiz in the one-by-one layout showing question 3 of 6, a progress bar, and an ordering question with Previous and Next buttons](/images/course-and-learning/using-the-quiz-module/one-by-one-layout-11.webp)

### Viewing Explanations

After a student submits, a **View Explanation** link appears under every question that has one — whether the student got it right or wrong.

![A quiz result page with an expanded explanation shown below a Fill in the Blank question](/images/course-and-learning/using-the-quiz-module/explanation-result-9.webp)

::: info
Students can't see a question's explanation before they've attempted the quiz. If **Hide answers on result page** is turned on, explanations stay hidden along with the answers.
:::
