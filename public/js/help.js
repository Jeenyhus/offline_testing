angular.module('helpApp', ['ngSanitize']) // Include ngSanitize module
.controller('HelpController', function($scope) {
    // FAQ data 
    $scope.faqs = [
        // Kolibri
        { category: 'kolibri', question: "What does 'monthend' do?", answer: "Input the command <b>‘monthend 02-24’</b>; where, in this instance, <i>'02'</i> represents the month (February) and <i>‘24’</i> is the year (2024). The month-end process occurs on the 15th and the last day of every month. If the 15th falls on a Saturday, submission should be conducted on the preceding Friday, adhering to the same protocol for the month-end date." },
        { category: 'kolibri', question: "What does 'make_quiz' do?", answer: "When you use the <b>‘make_quiz’</b> command it will refresh previously created quizzes." },
        { category: 'kolibri', question: "How do I create a backup?", answer: "On the session laptop, initiate the backup process by accessing the terminal and executing the command <b>'backup'</b>. This action generates a backup inclusive of data up to the current day." },
        { category: 'kolibri', question: "How do I upload a backup to Telegram?", answer: "After completing a backup, transfer it to the Coach tablet, and upload the backup to the Edulution Telegram Channel for secure data storage. This is done <i>twice a month</i> (mid-month and month-end)." },
        { category: 'kolibri', question: "What does 'assign_learners' do?", answer: "The <b>'assign_learners'</b> command assigns learners to their correct groups in Kolibri." },
        { category: 'kolibri', question: "What does 'restartko' do?", answer: "The <b>'restartko'</b> command restarts Kolibri, ensuring it runs smoothly. Kolibri should be operational again within 2 minutes." },
        { category: 'kolibri', question: "How do I log in to Kolibri?", answer: "Learners log in to Kolibri by opening Edulution Portal on the tablets, then selecting the Kolibri icon on the portal home page, entering their username, and tapping <b>'Sign in'</b>." },
        { category: 'kolibri', question: "What should I do if learners are not appearing in the Kolibri dashboard?", answer: "If learners are not showing on the Kolibri dashboard, ensure that they are logged in correctly and refresh the page. If the issue persists, check for possible network issues or try restarting Kolibri using the <b>'restartko'</b> command." },
        { category: 'kolibri', question: "How do I view learner progress on the Coach Dashboard ?", answer: "Go to the Coach Dashboard and view the <b>'Learners'</b> tab for a detailed overview of each learner's progress." },

        // Reports
        { category: 'reports', question: "How do I analyze test results?", answer: "Go to the <b>Coach Dashboard</b> and select <b>'Test Results'</b>. You can view a detailed breakdown of the learner’s performance and identify areas where they may need additional support." },
        { category: 'reports', question: "How do I view learner attendance on Kolibri?", answer: "Sign in as a Coach using the centre code, go to <b>'Classes'</b>, and then tap into <b>'Live attendance'</b> to see the list of live learners in the session." },
        { category: 'reports', question: "How can I access reports on Qlik?", answer: "Access the Qlik dashboard using your Edulution email credentials. Navigate through the dashboard and apply filters as needed to generate customized reports on learner progress and other key metrics." },

        // Hardware
        { category: 'hardware', question: "What do I do if a tablet is malfunctioning?", answer: "Try restarting the tablet. If the issue persists, perform a factory reset by navigating to the <b>'Backup and Reset'</b> option under <b>'Settings'</b> and selecting <b>'Factory Data Reset'</b>. If the issue persists create a ticket on Freshdesk" },
        { category: 'hardware', question: "How do I set up the hardware for a session?", answer: "Switch on the session laptop, connect it to the router using an ethernet cable, and ensure that the Wi-Fi access point is connected properly. All devices should be charged and connected to the network." },
        { category: 'hardware', question: "What should I do if a tablet loses connection during a session?", answer: "Check if the Wi-Fi connection is active. If necessary, restart the tablet or refresh the Wi-Fi connection. You may also need to restart Kolibri using the <b>'restartko'</b> command." },
        { category: 'hardware', question: "How do I manage solar equipment?", answer: "Keep the solar panels clean by using a sponge cleaner twice a week. Log the solar battery levels daily, and ensure that the solar equipment is functioning correctly to support off-grid sessions." },
        { category: 'hardware', question: "What should I do if the router is not working?", answer: "Ensure the router is properly connected to the power source and the session laptop. If it's still not working, restart the router and check the cables. If this issue persists create a ticket on Freshdesk." },

        // Software
        { category: 'software', question: "How do I access Google Drive?", answer: "Go to drive.google.com, log in with your Edulution credentials, and navigate to the relevant folders. You can upload and organize files, or access shared documents such as reports and personal files like payslips." },
        { category: 'software', question: "What does the 'shutdown' command do?", answer: "The <b>'shutdown'</b> command safely powers down the session laptop, ensuring that a backup is made before the laptop shuts off." },
        { category: 'software', question: "What should I do if I experience slow performance in Kolibri?", answer: "If Kolibri is slow, you can try restarting the laptop or tablet. If the issue persists, use the <b>'restartko'</b> command to reset Kolibri and restore its performance.If this issue persists create a ticket on Freshdesk." },
    
    ];
    

    $scope.searchText = '';
    $scope.selectedCategory = '';
    $scope.filteredFaqs = $scope.faqs;

    // Filter FAQs based on search input and category
    $scope.filterCommands = function() {
        var filter = $scope.searchText.toUpperCase();
        var category = $scope.selectedCategory;

        $scope.filteredFaqs = $scope.faqs.filter(function(faq) {
            var matchesCategory = category === '' || faq.category === category;
            var matchesSearch = faq.question.toUpperCase().indexOf(filter) > -1;
            return matchesCategory && matchesSearch;
        });
    };

    // Check if a FAQ matches the current filters
    $scope.faqMatches = function(faq) {
        var matchesCategory = $scope.selectedCategory === '' || faq.category === $scope.selectedCategory;
        var matchesSearch = faq.question.toUpperCase().indexOf($scope.searchText.toUpperCase()) > -1;
        return matchesCategory && matchesSearch;
    };
});