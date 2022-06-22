// <!----XOPPY Is A Trademark Of XOPBOT.inc And XOPBOT© More At https://xopbot.glitch.me/ 🔥🔥🔥---->
function startSearch() {
    if (window.hasOwnProperty("webkitSpeechRecognition")) {
        var recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";
        recognition.start();
        recognition.onresult = function(e) {
            document.getElementById("search").value = e.results[0][0].transcript;
            recognition.stop();
            document.getElementById("GeekerMagazine").submit();
        };
        recognition.onerror = function(e) {
            recognition.stop();
        };
    }
}

function recent() {
    var a = document.getElementById("advert");
    if (a.style.display === "none") {
        a.style.display = "block";
    } else {
        a.style.display = "none";
    }
    var x = document.getElementById("rar");
    if (x.innerHTML === "Show Adverts | 🔴") {
        x.innerHTML = "Show Adverts | 🟢";
    } else {
        x.innerHTML = "Show Adverts | 🔴";
    }
}

function latest() {
    var a = document.getElementById("r-activity");
    var e = document.getElementById("r-head");
    if (a.style.display === "none") {
        a.style.display = "flex";
    } else {
        a.style.display = "none";
    }
    if (e.style.display === "none") {
        e.style.display = "block";
    } else {
        e.style.display = "none";
    }
    var x = document.getElementById("pra");
    if (x.innerHTML === "Show Activity | 🟢") {
        x.innerHTML = "Show Activity | 🔴";
    } else {
        x.innerHTML = "Show Activity | 🟢";
    }
}

function fastest() {
    var a = document.getElementById("d-coner");
    if (a.style.display === "none") {
        a.style.display = "flex";
    } else {
        a.style.display = "none";
    }
    var x = document.getElementById("bru");
    if (x.innerHTML === "Show Content | 🟢") {
        x.innerHTML = "Show Content | 🔴";
    } else {
        x.innerHTML = "Show Content | 🟢";
    }
}
window.onscroll = function() {
    myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}
var g = (document.getElementById("lang").onchange = listener);

function listener() {
    var value = this.value;
    console.log(value);
    if (value == "en|el") {
        var d = document.getElementById("data-1");
        var c = document.getElementById("data-2");
        var a = document.getElementById("data-3");
        var v = document.getElementById("data-4");
        var ca = document.getElementById("r-data-1");
        var da = document.getElementById("r-data-2");
        var ka = document.getElementById("r-data-3");
        var va = document.getElementById("r-data-4");
        var sap = document.getElementById("w-head-e");
        var kap = document.getElementById("w-desc-e");
        var se = document.getElementById("search");
        if (se.placeholder === "🔎 Search With Google") {
            se.placeholder = "🔎 Αναζήτηση με Google";
        } else {
            se.placeholder = "🔎 Search With Google";
        }
        if (sap.innerHTML === "Warning ⚠️") {
            sap.innerHTML = "Προειδοποίηση ⚠️";
        } else {
            sap.innerHTML = "Warning ⚠️";
        }
        if (kap.innerHTML === "We currently don't support mobile users or tv users in terms of user suggestions and user activity 😢.<br/>We are really sorry but until we have finished with the complete design of the website we won't support that bit of this search engine.<br/>Please wait for futher updates by our company or our current staff members 😄.") {
            kap.innerHTML = "Προς το παρόν δεν υποστηρίζουμε χρήστες κινητών τηλεφώνων ή χρήστες τηλεόρασης όσον αφορά τις προτάσεις χρηστών και τη δραστηριότητα των χρηστών 😢.<br/>Λυπούμαστε πραγματικά, αλλά μέχρι να ολοκληρώσουμε την πλήρη σχεδίαση του ιστότοπου, δεν θα υποστηρίξουμε αυτό το κομμάτι μηχανή αναζήτησης.<br/>Περιμένετε για περαιτέρω ενημερώσεις από την εταιρεία μας ή τα τρέχοντα μέλη του προσωπικού μας 😄.";
        } else {
            kap.innerHTML = "We currently don't support mobile users or tv users in terms of user suggestions and user activity 😢.<br/>We are really sorry but until we have finished with the complete design of the website we won't support that bit of this search engine.<br/>Please wait for futher updates by our company or our current staff members 😄.";
        }
        if (a.innerHTML === "The Gentleman Prank") {
            a.innerHTML = "Φάρσα ως κύριος";
        } else {
            a.innerHTML = "The Gentleman Prank";
        }
        if (c.innerHTML === "Deep-Voice Trolling On...") {
            c.innerHTML = "Τρολλάρισμα με βαθία φωνή";
        } else {
            c.innerHTML = "Deep-Voice Trolling On...";
        }
        if (d.innerHTML === "I Got Hunted By The FBI...") {
            d.innerHTML = "Κυνηγήθηκα απο το FBI";
        } else {
            d.innerHTML = "I Got Hunted By The FBI...";
        }
        if (v.innerHTML === "Stealing Phones Gone Wrong!") {
            v.innerHTML = "Κλέβω κινητά πάει λάθος!";
        } else {
            v.innerHTML = "Stealing Phones Gone Wrong!";
        }
        if (ca.innerHTML === "Home") {
            ca.innerHTML = "Σπιτάκι";
        } else {
            ca.innerHTML = "Home";
        }
        if (da.innerHTML === "Popular") {
            da.innerHTML = "Δημοφιλές";
        } else {
            da.innerHTML = "Popular";
        }
        if (ka.innerHTML === "Explore") {
            ka.innerHTML = "Εξερεύνησε";
        } else {
            ka.innerHTML = "Explore";
        }
        if (va.innerHTML === "History") {
            va.innerHTML = "Ιστορικό";
        } else {
            va.innerHTML = "History";
        }
    } else if (value == "en|en") {
        var d = document.getElementById("data-1");
        var c = document.getElementById("data-2");
        var g = document.getElementById("data-3");
        var v = document.getElementById("data-4");
        var ca = document.getElementById("r-data-1");
        var da = document.getElementById("r-data-2");
        var ka = document.getElementById("r-data-3");
        var va = document.getElementById("r-data-4");
        var se = document.getElementById("search");
        if (se.placeholder === "🔎 Αναζήτηση με Google") {
            se.placeholder = "🔎 Search With Google";
        } else {
            se.placeholder = "🔎 Αναζήτηση με Google";
        }
        if (g.innerHTML === "Φάρσα ως κύριος") {
            g.innerHTML = "The Gentleman Prank";
        } else {
            g.innerHTML = "Φάρσα ως κύριος";
        }
        if (c.innerHTML === "Τρολλάρισμα με βαθία φωνή") {
            c.innerHTML = "Deep-Voice Trolling On...";
        } else {
            c.innerHTML = "Τρολλάρισμα με βαθία φωνή";
        }
        if (d.innerHTML === "Κυνηγήθηκα απο το FBI") {
            d.innerHTML = "I Got Hunted By The FBI...";
        } else {
            d.innerHTML = "Κυνηγήθηκα απο το FBI";
        }
        if (v.innerHTML === "Κλέβω κινητά πάει λάθος!") {
            v.innerHTML = "Stealing Phones Gone Wrong!";
        } else {
            v.innerHTML = "Κλέβω κινητά πάει λάθος!";
        }
        if (ca.innerHTML === "Σπιτάκι") {
            ca.innerHTML = "Home";
        } else {
            ca.innerHTML = "Σπιτάκι";
        }
        if (da.innerHTML === "Δημοφιλές") {
            da.innerHTML = "Popular";
        } else {
            da.innerHTML = "Δημοφιλές";
        }
        if (ka.innerHTML === "Εξερεύνησε") {
            ka.innerHTML = "Explore";
        } else {
            ka.innerHTML = "Εξερεύνησε";
        }
        if (va.innerHTML === "Ιστορικό") {
            va.innerHTML = "History";
        } else {
            va.innerHTML = "Ιστορικό";
        }
    }
}