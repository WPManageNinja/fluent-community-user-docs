---
title: Automating Level Ups
description: Learn how to automate rewards in FluentCommunity by setting up "Level-Ups," which can automatically assign new roles or badges to members when they reach point milestones.
---

# Automating Level Ups

The "Level-Up" feature is a powerful automation tool that allows you to reward your members automatically when they reach specific point milestones. This is the key to creating a self-sustaining gamification system where user engagement is directly tied to tangible rewards and increased status.

> **Use Case:** You can create a system where a new member starts as a "Novice," but once they earn 100 points, they automatically "level up" to the "Contributor" role and receive a new badge, all without any manual admin work.

## How to Configure Level-Ups

Level-Up triggers are configured from the Gamification settings.

1.  From your WordPress dashboard, navigate to **FluentCommunity → Settings**.
2.  Click on the **Gamification** tab and then select the **Levels** or **Level-Ups** sub-menu.
3.  Click the **Add New Level** button.

This will open the configuration screen where you can define the trigger and the resulting action.

[Screenshot: The "Add New Level" screen showing the fields for required points and the actions to be triggered.]

## Setting Up a Level-Up Rule

For each level, you need to define two things: the requirement and the reward.

### 1. Set the Requirement

* **Required Points:** Enter the total number of points a user must accumulate to achieve this level. For example, enter `100` to trigger this level-up when a user's total score reaches 100.

### 2. Set the Reward (Action)

* **Assign Role:** You can select a new user role to be automatically assigned to the member when they reach this level. This can be used to grant them new permissions or a new title.
* **Assign Badge:** You can select a badge that will be automatically awarded to the member. This provides a clear visual indicator of their new status.

You can use either a role, a badge, or both as the reward.

> **✨ Note:**
> You can create multiple levels to build a full progression path for your members. For example:
> * **Level 1:** 100 Points → "Contributor" Role
> * **Level 2:** 500 Points → "Expert" Role + "Expert" Badge
> * **Level 3:** 2000 Points → "Veteran" Role + "Veteran" Badge

Click **Save Level** to add the rule. Your automation is now active. The system will continuously check members' point totals and automatically trigger these rewards when the milestones are met.

**Related Topics:**
- Learn about [configuring the points system](./configuring-the-points-system.md) to set up point values
- Explore [creating and assigning badges](./creating-&-assigning-badges.md) to recognize achievements
- Set up [leaderboards](./setting-up-leaderboards.md) to showcase top contributors