var otraVez = function (a) {
        alert(a);
    };
var alreadyClicked = [];
var tutorialClick = function (b) {
        switch (b) {
        case 1:
            if (alreadyClicked[0] !== "1") {
                $("#tutorial_right1 p").append("M").hide().fadeIn(2000);
                alreadyClicked.push("1");
            }
            break;
        case 2:
            if (alreadyClicked[0] === "1" && alreadyClicked[1] !== "2") {
                $("#tutorial_right1 h6").append("->").hide().fadeIn(2000);
                alreadyClicked.push("2");
            }
            break;
        case 3:
            if (alreadyClicked[1] === "2" && alreadyClicked[2] !== "3") {
                $("#tutorial_right1 h7").append("J").hide().fadeIn(2000);
                alreadyClicked.push("3");
            }
            break;
        case 4:
            if (alreadyClicked[2] === "3" && alreadyClicked[3] !== "4") {
                $("#tutorial_right2 p").append("J").hide().fadeIn(2000);
                alreadyClicked.push("4");
            }
            break;
        case 5:
            if (alreadyClicked[3] === "4" && alreadyClicked[4] !== "5") {
                $("#tutorial_right2 h6").append("->").hide().fadeIn(2000);
                alreadyClicked.push("5");
            }
            break;
        case 6:
            if (alreadyClicked[4] === "5" && alreadyClicked[5] !== "6") {
                $("#tutorial_right2 h7").append("M").hide().fadeIn(2000);
                alreadyClicked.push("6");
            }
            break;
        case 7:
            if (alreadyClicked[5] === "6" && alreadyClicked[6] !== "7") {
                $("#tutorial_right3 p").append("M<br />").hide().fadeIn(2000);
                alreadyClicked.push("7");
            }
            break;
        case 8:
            if (alreadyClicked[6] === "7" && alreadyClicked[7] !== "8") {
                $("#tutorial_right3 h6").append("&nbsp;->&nbsp;<br />").hide().fadeIn(2000);
                alreadyClicked.push("8");
            }
            break;
        case 9:
            if (alreadyClicked[7] === "8" && alreadyClicked[8] !== "9") {
                $("#tutorial_right3 h7").append("J<br />").hide().fadeIn(2000);
                alreadyClicked.push("9");
            }
            break;
        case 10:
            if (alreadyClicked[8] === "9" && alreadyClicked[9] !== "10") {
                $("#tutorial_right3 p").append("<del>M<del>").hide().fadeIn(2000);
                alreadyClicked.push("10");
            }
            break;
        case 11:
            if (alreadyClicked[9] === "10" && alreadyClicked[10] !== "11") {
                $("#tutorial_right3 h6").append("&nbsp;->&nbsp;").hide().fadeIn(2000);
                alreadyClicked.push("11");
            }
            break;
        case 12:
            if (alreadyClicked[10] === "11" && alreadyClicked[11] !== "12") {
                $("#tutorial_right3 h7").append("<del>J<del>").hide().fadeIn(2000);
                alreadyClicked.push("12");
            }
            break;
        case 13:
            if (alreadyClicked[11] === "12" && alreadyClicked[12] !== "13") {
                $("#tutorial_right4 p").append("M<br />").hide().fadeIn(2000);
                alreadyClicked.push("13");
            }
            break;
        case 14:
            if (alreadyClicked[12] === "13" && alreadyClicked[13] !== "14") {
                $("#tutorial_right4 h6").append("&nbsp;->&nbsp;<br />").hide().fadeIn(2000);
                alreadyClicked.push("14");
            }
            break;
        case 15:
            if (alreadyClicked[13] === "14" && alreadyClicked[14] !== "15") {
                $("#tutorial_right4 h7").append("J<br />").hide().fadeIn(2000);
                alreadyClicked.push("15");
            }
            break;
        case 16:
            if (alreadyClicked[14] === "15" && alreadyClicked[15] !== "16") {
                $("#tutorial_right4 p").append("<del>J<del>").hide().fadeIn(2000);
                alreadyClicked.push("16");
            }
            break;
        case 17:
            if (alreadyClicked[15] === "16" && alreadyClicked[16] !== "17") {
                $("#tutorial_right4 h6").append("&nbsp;->&nbsp;").hide().fadeIn(2000);
                alreadyClicked.push("17");
            }
            break;
        case 18:
            if (alreadyClicked[16] === "17" && alreadyClicked[17] !== "18") {
                $("#tutorial_right4 h7").append("<del>M<del>").hide().fadeIn(2000);
                alreadyClicked.push("18");
            }
            break;
        case 19:
            if (alreadyClicked[17] === "18" && alreadyClicked[18] !== "19") {
                $("#tutorial_right5 h7").append("FL").hide().fadeIn(2000);
                alreadyClicked.push("19");
            }
            break;
        case 20:
            if (alreadyClicked[18] === "19" && alreadyClicked[19] !== "20") {
                $("#tutorial_right5 h7").append("&nbsp;->&nbsp;").hide().fadeIn(2000);
                alreadyClicked.push("20");
            }
            break;
        case 21:
            if (alreadyClicked[19] === "20" && alreadyClicked[20] !== "21") {
                $("#tutorial_right5 h7").append("U.S.<br />").hide().fadeIn(2000);
                alreadyClicked.push("21");
            }
            break;
        case 22:
            if (alreadyClicked[20] === "21" && alreadyClicked[21] !== "22") {
                $("#tutorial_right5 h7").append("<del>U.S.<del>").hide().fadeIn(1000);
                alreadyClicked.push("22");
            }
            break;
        case 23:
            if (alreadyClicked[21] === "22" && alreadyClicked[22] !== "23") {
                $("#tutorial_right5 h7").append("&nbsp;->&nbsp;").hide().fadeIn(1000);
                alreadyClicked.push("23");
            }
            break;
        case 24:
            if (alreadyClicked[22] === "23" && alreadyClicked[23] !== "24") {
                $("#tutorial_right5 h7").append("<del>FL<del>").hide().fadeIn(1000);
                alreadyClicked.push("24");
            }
            break;
        case 25:
            if (alreadyClicked[23] === "24" && alreadyClicked[24] !== "25") {
                $("#tutorial_right6 p").append("Mike or Josh<br /><br />").hide().fadeIn(2000);
                alreadyClicked.push("25");
            }
            break;
        case 26:
            if (alreadyClicked[24] === "25" && alreadyClicked[25] !== "26") {
                $("#tutorial_right6 h6").append("-><br />").hide().fadeIn(2000);
                alreadyClicked.push("26");
            }
            break;
        case 27:
            if (alreadyClicked[25] === "26" && alreadyClicked[26] !== "27") {
                $("#tutorial_right6 h7").append("Kate and Ashley<br /><br />").hide().fadeIn(2000);
                alreadyClicked.push("27");
            }
            break;
        case 28:
            if (alreadyClicked[26] === "27" && alreadyClicked[27] !== "28") {
                $("#tutorial_right6 p").append("<del>Kate</del>&nbsp;or&nbsp;<del>Ashley</del>").hide().fadeIn(2000);
                alreadyClicked.push("28");
            }
            break;
        case 29:
            if (alreadyClicked[27] === "28" && alreadyClicked[28] !== "29") {
                $("#tutorial_right6 h6").append("&nbsp;->&nbsp;").hide().fadeIn(2000);
                alreadyClicked.push("29");
            }
            break;
        case 30:
            if (alreadyClicked[28] === "29" && alreadyClicked[29] !== "30") {
                $("#tutorial_right6 h7").append("<del>Mike</del>&nbsp;or&nbsp;<del>Josh</del>").hide().fadeIn(2000);
                alreadyClicked.push("30");
            }
            break;
        case 31:
            if (alreadyClicked[29] === "30" && alreadyClicked[30] !== "31") {
                $("#tutorial_right7 p").append("M<br />").hide().fadeIn(2000);
                alreadyClicked.push("31");
            }
            break;
        case 32:
            if (alreadyClicked[30] === "31" && alreadyClicked[31] !== "32") {
                $("#tutorial_right7 h6").append("&nbsp;<->&nbsp;<br />").hide().fadeIn(2000);
                alreadyClicked.push("32");
            }
            break;
        case 33:
            if (alreadyClicked[31] === "32" && alreadyClicked[32] !== "33") {
                $("#tutorial_right7 h7").append("J<br />").hide().fadeIn(2000);
                alreadyClicked.push("33");
            }
            break;
        case 34:
            if (alreadyClicked[32] === "33" && alreadyClicked[33] !== "34") {
                $("#tutorial_right8 h7").append("M__J").hide().fadeIn(2000);
                alreadyClicked.push("34");
            }
            break;
        case 35:
            if (alreadyClicked[33] === "34" && alreadyClicked[34] !== "35") {
                $("#tutorial_right8 h7").append("&nbsp;->&nbsp;").hide().fadeIn(2000);
                alreadyClicked.push("35");
            }
            break;
        case 36:
            if (alreadyClicked[34] === "35" && alreadyClicked[35] !== "36") {
                $("#tutorial_right8 h7").append("K__A").hide().fadeIn(2000);
                alreadyClicked.push("36");
            }
            break;
        case 37:
            if (alreadyClicked[35] === "36" && alreadyClicked[36] !== "37") {
                $("#tutorial_right9 p").append("M__J or FL<br /><br />").hide().fadeIn(2000);
                alreadyClicked.push("37");
            }
            break;
        case 38:
            if (alreadyClicked[36] === "37" && alreadyClicked[37] !== "38") {
                $("#tutorial_right9 h6").append("&nbsp;->&nbsp;<br />").hide().fadeIn(2000);
                alreadyClicked.push("38");
            }
            break;
        case 39:
            if (alreadyClicked[37] === "38" && alreadyClicked[38] !== "39") {
                $("#tutorial_right9 h7").append("K__A and U.S.<br /><br />").hide().fadeIn(2000);
                alreadyClicked.push("39");
            }
            break;
        case 40:
            if (alreadyClicked[38] === "39" && alreadyClicked[39] !== "40") {
                $("#tutorial_right9 p").append("<del>K__A</del>&nbsp;or&nbsp;<del>U.S.</del>").hide().fadeIn(2000);
                alreadyClicked.push("40");
            }
            break;
        case 41:
            if (alreadyClicked[39] === "40" && alreadyClicked[40] !== "41") {
                $("#tutorial_right9 h6").append("&nbsp;->&nbsp;").hide().fadeIn(2000);
                alreadyClicked.push("41");
            }
            break;
        case 42:
            if (alreadyClicked[40] === "41" && alreadyClicked[41] !== "42") {
                $("#tutorial_right9 h7").append("<del>M__J</del>&nbsp;and&nbsp;<del>FL</del>").hide().fadeIn(2000);
                alreadyClicked.push("42");
            }
            break;
        }
    };
