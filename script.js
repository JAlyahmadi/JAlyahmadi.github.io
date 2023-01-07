// Navigation tree to be used to navigate back when the back button is clicked
var tree = {
  chemistry: "phase1",
  english: "phase1",
  informatics1: "phase1",
  anatomy: "phase1",
  physiology: "phase1",
  enzymology: "phase1",
  cytology: "phase1",
  rip: "phase2sem1",
  sfr: "phase2sem1",
  hospital: "phase2sem1",
  molecular: "phase2sem1",
  growth: "phase2sem1",
  cvs: "phase2sem2",
  his: "phase2sem2",
  integrated1: "phase2sem2",
  respiratory: "phase2sem2",
  informatics2: "phase2sem2",
  research: "phase2sem2",
  alimentary: "phase2sem3",
  uroreproductive: "phase2sem3",
  integrated2: "phase2sem3",
  nutrition: "phase2sem3",
  project1: "phase2sem3",
  hns: "phase2sem4",
  endocrine: "phase2sem4",
  integrated3: "phase2sem4",
  locomotor: "phase2sem4",
  project2: "phase2sem4"
}

// Page to icon src to be used for bookmarks
var iconsSrc = {
  phase1: "icons/1.svg",
  phase2: "icons/2.svg",
  phase3: "icons/3.svg",
  phase2sem1: "icons/1.svg",
  phase2sem2: "icons/2.svg",
  phase2sem3: "icons/3.svg",
  phase2sem4: "icons/4.svg",
  phase2sem1: "icons/1.svg",
  preclerkship: "icons/trophy1.svg",
  juniorclerkship: "icons/trophy2.svg",
  seniorclerkship: "icons/trophy3.svg",
  preinternship:"icons/trophy4.svg",
  resources: "icons/resources.svg",
  guides: "icons/guides.svg",
  books: "icons/books.svg",
  video: "icons/videolibrary.svg",
  chemistry: "icons/chemistry.svg",
  english: "icons/english.svg",
  informatics1: "icons/informatics.svg",
  anatomy: "icons/anatomy.svg",
  physiology: "icons/physiology.svg",
  enzymology: "icons/enzymology.svg",
  cytology: "icons/cellular.svg",
  rip: "icons/rip.svg",
  sfr: "icons/sfr.svg",
  hospital: "icons/hospital.svg",
  molecular: "icons/molecular.svg",
  growth: "icons/growth.svg",
  cvs: "icons/cvs.svg",
  his: "icons/his.svg",
  integrated1: "icons/integrated.svg",
  respiratory: "icons/respiratory.svg",
  informatics2: "icons/informatics.svg",
  research: "icons/research.svg",
  alimentary: "icons/alimentary.svg",
  uroreproductive: "icons/uroreproductive.svg",
  integrated2: "icons/integrated.svg",
  nutrition: "icons/nutrition.svg",
  project1: "icons/project.svg",
  hns: "icons/hns.svg",
  endocrine: "icons/endocrine.svg",
  integrated3: "icons/integrated.svg",
  locomotor: "icons/locomotor.svg",
  project2: "icons/project.svg"
}

// Load/initialise localStorage
var storage = localStorage["goldenDriveStorage"];
if(storage){
  storage = JSON.parse(storage);
} else {
  storage = {
    bookmarks: [],
    bookmarkLabels: {},
    defaultCourseSemester: "p1",
    defaultExamSemester: "p1",
    defaultStudentSemester: "p1",
    lastAnnouncement: "",
    lastChangelog: "",
    theme: "golden"
  }
  localStorage["goldenDriveStorage"] = JSON.stringify(storage);
}

// Set variables from storage
var bookmarks = storage["bookmarks"];
var bookmarkLabels = storage["bookmarkLabels"];
var defaultCourseSemester = storage["defaultCourseSemester"];
var defaultExamSemester = storage["defaultExamSemester"];
var defaultStudentSemester = storage["defaultStudentSemester"];
var lastAnnouncement = storage["lastAnnouncement"];
var lastChangelog = storage["lastChangelog"];
var theme = storage["theme"] || "golden";
// Handle an error that has occurred for some people during development
if(typeof(lastChangelog) !== "string"){
  lastChangelog = "";
}

// Other variables
var semesterValues = {"p1": 1, "p2s1": 2, "p2s2": 3, "p2s3": 4, "p2s4": 5, "p3s1": 6, "p3s2": 7};
var currentChangelog = "";
var examTimes = [];
var changelogNotes = [];
var lastChangelogNotes = [];
var historyBack = [JSON.parse(JSON.stringify(location.hash))];
var historyForward = [];
var lastHash = JSON.parse(JSON.stringify(location.hash));
var transitioning = false;

// Update localStorage with the new values of the variables
function updateStorage(){
  storage["bookmarks"] = bookmarks;
  storage["bookmarkLabels"] = bookmarkLabels;
  storage["defaultCourseSemester"] = defaultCourseSemester;
  storage["defaultExamSemester"] = defaultExamSemester;
  storage["defaultStudentSemester"] = defaultStudentSemester;
  storage["lastAnnouncement"] = lastAnnouncement;
  storage["lastChangelog"] = lastChangelog;
  storage["theme"] = theme;
  localStorage["goldenDriveStorage"] = JSON.stringify(storage);
}

// Add leading zeros to numbers
function zero(num, digits){
  num = num.toString();
  while (num.length < digits) num = "0" + num;
  return num;
}

// This is used to check if an item within changelogNotes exists in old changelogs
function shallowEqual(object1, object2){
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length){
    return false;
  }
  for(let key of keys1){
    if(object1[key] !== object2[key]){
      return false;
    }
  }
  return true;
}

// Shuffle elements within an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Show the needed navigation buttons in #page-course for the given course
function showNeededPages(course){
  var neededPages = folderIDs[course];
  $(".course-content").hide();
  for(var key in neededPages){
    if(neededPages.hasOwnProperty(key)){
      if(Array.isArray(neededPages[key])){
        $("#c-" + key).attr("data-id", JSON.stringify(neededPages[key])).show();
        $("#c-" + key).attr("data-iframe", "false"); 
      } else {
        $("#c-" + key).attr("data-id", neededPages[key]).show();
        $("#c-" + key).attr("data-iframe", "true");
      }
    }
  }
}

// Navigate to the correct page depending on the URL hash
function pageFromHash(){
  if(location.hash.split("#").length > 2){
    var hashes = location.hash.split("#");
    showNeededPages(hashes[2]);
    $("#course-back").attr("data-go", "page-" + hashes[1]);
    if(hashes.length >= 4 && folderIDs[hashes[2]]){
      $("#page-files").show();
      $("#top").show();
      $("#iframe-back").attr("data-hash", "#" + hashes[1] + "#" + hashes[2]);
      if(Array.isArray(folderIDs[hashes[2]][hashes[3]])){
        var explorerFiles = folderIDs[hashes[2]][hashes[3]];
        $("#iframe-wrap").hide();
        $("#table-files").show();
        for(var i = 0; i < explorerFiles.length; i++){
          var newExplorerFile = "<tr><td class='table-file' data-bs-toggle='modal' data-bs-target='#modal-explorer' data-id='" + explorerFiles[i][1] + "'><i class='fa fa-folder-o'></i> " + explorerFiles[i][0] + "</td></tr>";
          $("#table-files tbody").append(newExplorerFile);
        }
      } else {
        $("#iframe-gdrive").attr("src", "https://drive.google.com/embeddedfolderview?id=" + folderIDs[hashes[2]][hashes[3]]);
        $("#top").hide();
        $("#iframe-wrap").height(200);
        $("body").css("overflow", "hidden");
        $("#iframe-gdrive").on("load", function(){
          iframeResize();
          $("#iframe-gdrive").css("opacity", "1");
          $("#iframe-wrap").css("background-image", "none");
        });
      }
    } else {
      $("#page-course").show();
      $("#top").show();
    }
  } else if(!location.hash || !$("#page-" + location.hash.replace("#", "")).length){
    $("#page-main").show();
    $("#top").show();
  } else {
    $("#page-" + location.hash.replace("#", "")).show();
    $("#top").show();
  }
}

// Animate each .bigbtn showing up individually and in sequence
function showBtnsAnimation(){
  $(".page .bigbtn").css("opacity", "0").css("transform", "scale(0.85)");
  setTimeout(function(){
    for(var i = 0; i < $(".page").length; i++){
      var timeInterval = 40;
      for(var j = 0; j < $(".page:eq(" + i + ") .bigbtn:not(:hidden)").length; j++){
        var showBtn = function(page, btn, interval){
          setTimeout(function(){
            $(".page:eq(" + page + ") .bigbtn:not(:hidden):eq(" + btn + ")").css("opacity", "1").css("transform", "scale(1)");
          }, interval)
        };
        showBtn(i, j, timeInterval);
        timeInterval += 40;
      }
    }
  }, 200);
}


// Change the position of the main container to be always in the centre
function containerPosition(){
  var newTop = ($(window).height() - $("#page-main").height()) / 2 - 115;
  if(newTop > 0 && $(window).width() > 991){
    $(".container").css("top", newTop + "px");
  } else {
    $(".container").css("top", 0);
  }
}

// Set the height of the iframe to be the remainder of the page and properly resize the iframe according to the transform: scale(1.5) of it
function iframeResize(){
  $("#iframe-wrap").height($(window).height() - $("#iframe-wrap").offset()["top"] - 80);
  $("#iframe-gdrive").width($("#iframe-wrap").width() / 1.3);
  $("#iframe-gdrive").height($("#iframe-wrap").height() / 1.3);
}

// Set the height of the preview iframe in the timetable modal to be the remainder of the modal
function previewResize(){
  if($(window).width() > 575){
    $("#timetable-courses-preview").height($("#modal-timetable").height() - $("#timetable-courses-preview").offset()["top"] - 62);
  } else {
    $("#timetable-courses-preview").height($(window).height() - $("#timetable-courses-preview").position().top - 96);
  }
}

// Shuffle the names in the phase 3 group randomiser
function groupShuffle(){
  var males = $("#randomiser-male").val().split("\n").filter(function(x){return x.replace(/ /g, "") !== ""}).map(function(x){return [x, "male"]});
  var females = $("#randomiser-female").val().split("\n").filter(function(x){return x.replace(/ /g, "") !== ""}).map(function(x){return [x, "female"]});
  var students = shuffleArray(males).concat(shuffleArray(females));
  var groupNum = parseInt($("#randomiser-number").val());
  var groups =  [];
  var output = "";
  for(var i = 0; i < groupNum; i++){
    groups.push([]);
  }
  for(var i = 0; i < students.length; i++){
    groups[i % groupNum].push(students[i]);
  }
  for(var i = 0; i < groupNum; i++){
    output += "<div class='randomiser-group'><h5>Group " + (i + 1) + "</h5>";
    for(var j = 0; j < groups[i].length; j++){
      output += "<span class='badge rounded-pill bg-" + groups[i][j][1] + "'>" + groups[i][j][0] + "</span>";
    }
    output += "</div>";
  }
  $("#randomiser-output").html(output);
}

// Set the height of all .guide-container to the one with the largest height value
function guideResize(){
  $(".guide-container").css("height", "100%");
  var maxHeight = Math.max.apply(null, $(".guide-container").map(function(){return $(this).height()}).get());
  $(".guide-container").css("height", maxHeight + "px");
}

// Change the text of the Add Bookmark button according to whether the current page is included, and update the bookmarks list
function updateBookmarks(){
  if(bookmarks.includes(location.hash || "#main")){
    $("#bookmark-add").attr("data-state", "remove");
    $("#bookmark-add").html("<i class='material-symbols-outlined' style='font-variation-settings: \"FILL\" 1'>star</i> <span>Remove Bookmark</span>");
  } else {
    $("#bookmark-add").attr("data-state", "add");
    $("#bookmark-add").html("<i class='material-symbols-outlined'>star</i> <span>Add Bookmark</span>");
  }
  if(bookmarks.length){
    $("#bookmark-dropdown").html("");
    for(var i = 0; i < bookmarks.length; i++){
      var bookmarkIcon = "icons/home.svg";
      for(var j = 0; j < bookmarks[i].split("#").length; j++){
        if(iconsSrc[bookmarks[i].split("#")[j]]){
          bookmarkIcon = iconsSrc[bookmarks[i].split("#")[j]];
        }
      }
      $("#bookmark-dropdown").append("<a class='dropdown-item' href='" + bookmarks[i] + "'><object type='image/svg+xml' data='" + bookmarkIcon + "'></object>" + bookmarkLabels[bookmarks[i]] + "</a>");
    }
    $("#bookmark-dropdown a").click(function(){
      transitioning = true;
      location.hash = $(this).attr("href");
      location.reload();
    });
  } else {
    $("#bookmark-dropdown").html("<a class='dropdown-item disabled'>No bookmarks. Navigate to any page and click \"Add Bookmark\" to add a new bookmark.</a>");
  }
}

// Read exams.txt and translate it into a nested array
// Formula: semester|title|dd/mm/yyyy|hh:mm|notes
function readExams(){
  var data = timetableText.replace(/(^[ \t]*\n)/gm, "").replace(/\n$/gm, "");
  var lines = data.split("\n");
  var currentDateObj = new Date();
  for(var i = 0; i < lines.length; i++){
    var lineSegments = lines[i].split("|");
    var newDate = lineSegments[2].split("/");
    var newTime = lineSegments[3].split(":");
    var newDateObj = new Date(parseInt(newDate[2]), parseInt(newDate[1]) - 1, parseInt(newDate[0]), parseInt(newTime[0]), parseInt(newTime[1]));
    if(newDateObj > currentDateObj){
      var newExam = [lineSegments[0], lineSegments[1], newDateObj, lineSegments[4]];
      examTimes.push(newExam);
    }
    examTimes.sort(function(a, b){
      return a[2] - b[2];
    });
  }
}

// Translate examTimes into a timetable listed under #timetable-exam
function updateExams(){
  $(".timer").remove();
  for(var i = 0; i < examTimes.length; i++){
    var currentDate = new Date();
    var remainingWeeks = Math.floor((examTimes[i][2] - currentDate) / 604800000);
    var remainingDays = Math.floor((examTimes[i][2] - currentDate - remainingWeeks * 604800000) / 86400000);
    var remainingHours = Math.floor((examTimes[i][2] - currentDate - remainingWeeks * 604800000 - remainingDays * 86400000) / 3600000);
    var newDateStrings = zero(examTimes[i][2].getDate(), 2) + "/" + zero(examTimes[i][2].getMonth() + 1, 2) + "/" + examTimes[i][2].getFullYear() + " " + zero(examTimes[i][2].getHours(), 2) + ":" + zero(examTimes[i][2].getMinutes(), 2);
    var newExamEntry =
      "<div class='timer' data-semester='" + examTimes[i][0] + "'>" +
        "<div class='row timer-container'>" +
          "<div class='col-lg-9 col-sm-8 timer-title'>" +
            "<h1>" + examTimes[i][1] + "</h1>" +
            "<span>" + newDateStrings + " (" + examTimes[i][3] + ")</span>" +
          "</div>" +
          "<div class='col-lg-3 col-sm-4 timer-countdown'>" +
            "<div class='row'>" +
              "<div class='col-4'><h1>" + zero(remainingWeeks, 2) + "</h1><span>Weeks</span></div>" +
              "<div class='col-4'><h1>" + zero(remainingDays, 2) + "</h1><span>Days</span></div>" +
              "<div class='col-4'><h1>" + zero(remainingHours, 2) + "</h1><span>Hours</span></div>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";
    $("#timetable-exam").append(newExamEntry);
  }
}

// Read changelog.txt and translate it into a nested array
// Formula:
//   date
//   notes (can be multiple lines)
//   ---
//   date
//   notes (can be multiple lines)
function readChangelog(){
  var data = changelogText.replace(/(^[ \t]*\n)/gm, "").replace(/\n$/gm, "");
  var chunks = data.split("\n---\n");
  var lastChunks = lastChangelog.replace(/(^[ \t]*\n)/gm, "").replace(/\n$/gm, "").split("\n---\n");
  currentChangelog = data;
  for(var i = 0; i < chunks.length; i++){
    var chunkLines = chunks[i].split("\n");
    changelogNotes.push(chunkLines);
  }
  for(var i = 0; i < lastChunks.length; i++){
    var chunkLines = lastChunks[i].split("\n");
    lastChangelogNotes.push(chunkLines);
  }
}

// Translate changelogNotes into a changelog list on the website
function updateChangelog(){
  var newChanges = 0;
  if(currentChangelog != lastChangelog){
    $("#changelog").addClass("bigbtn-active");
    $("#changelog-badge").show();
  }
  for(var i = 0; i < changelogNotes.length; i++){
    var notes = "";
    for(var j = 1; j < changelogNotes[i].length; j++){
      notes += "<li>" + changelogNotes[i][j] + "</li>";
    }
    notes = notes
      .replace(/{anki}/g, "<span class='badge bg-mini'>Anki</span>")
      .replace(/{drive}/g, "<span class='badge bg-mini'>Drive</span>")
      .replace(/{summary}/g, "<span class='badge bg-mini'>Summary</span>")
      .replace(/{website}/g, "<span class='badge bg-mini'>Website</span>");
    if(lastChangelogNotes.some(item => shallowEqual(item, changelogNotes[i]))){
      var newChangelogEntry =
        "<div class='changelog-note'>" +
          "<h6>" + changelogNotes[i][0] + "</h6>" +
          "<ul>" + notes + "</ul>" +
        "</div>";
    } else {
      newChanges += 1;
      var newChangelogEntry =
        "<div class='changelog-note'>" +
          "<h6>" + changelogNotes[i][0] + " <span class='badge bg-changelog bg-primary'>New</span></h6>" +
          "<ul>" + notes + "</ul>" +
        "</div>";
    }
    $("#changelog-container").append(newChangelogEntry);
  }
  $("#changelog-badge").text("+" + newChanges);
}

// Make sure the iframe size and the main container position are always correct when the window is resized, and also the height of .guide-container
$(window).on("resize", function(){
  containerPosition();
  iframeResize();
  previewResize();
  guideResize();
});

$(document).ready(function(){

  // The load timer is used to judge whether to force a longer loading time or not (for the MoTD)
  var endLoadTime = (new Date()).getTime();
  var loadTime = endLoadTime - startLoadTime;

  // Somehow this fixes a weird bug (CSS filter on #iframe-gdrive and #explorer-iframe get applied on the whole page momentarily)
  $("#iframe-gdrive").attr("src", "");
  $("#explorer-iframe").attr("src", "");

  // Remove the loader when the script is loaded or force a longer load time to read the MoTD
  // Also show the announcement if it has never been seen before
  if(loadTime >= 1500){
    $("body").css("overflow", "auto");
    $("#loader-overlay").fadeOut(400);
    $(".container").css("transform", "scale(1)");
    if(showAnnouncement && announcements != lastAnnouncement){
      var announcementsModal = new bootstrap.Modal($("#modal-announcements"));
      $("#announcements-body").html(announcements);
      announcementsModal.toggle();
    }
  } else {
    setTimeout(function(){
      $("body").css("overflow", "auto");
      $("#loader-overlay").fadeOut(400);
      $(".container").css("transform", "scale(1)");
      if(showAnnouncement && announcements != lastAnnouncement){
        var announcementsModal = new bootstrap.Modal($("#modal-announcements"));
        $("#announcements-body").html(announcements);
        announcementsModal.toggle();
      }
    }, 1500 - loadTime);
  }

  // Show the correct page from hash, update the main container position, the bookmarks, .guide-container heights, exam timetables and changelog
  pageFromHash();
  containerPosition();
  updateBookmarks();
  guideResize();
  readExams();
  updateExams();
  readChangelog();
  updateChangelog();

  // Prevent the announcements modal from showing again only when the close button is clicked
  $("#modal-announcements-close").click(function(){
    lastAnnouncement = announcements;
    updateStorage();
  });

  // Save the new changelog as lastChangelog and remove the .bigbtn-active class and hide #changelog-badge
  $("body").on("click", ".bigbtn-active", function(){
    $("#changelog").removeClass("bigbtn-active");
    $("#changelog-badge").hide();
    lastChangelog = currentChangelog;
    updateStorage();
  });

  // Change the src of the modal explorer iframe when .table-file is clicked
  $("body").on("click", ".table-file", function(){
    $("#explorer-iframe").attr("src", "https://drive.google.com/embeddedfolderview?id=" + $(this).attr("data-id") + "#list");
    $("#modal-explorer .modal-body").css("background-image", "");
    $("#explorer-iframe").on("load", function(){
      $("#explorer-iframe").css("opacity", "1");
      $("#modal-explorer .modal-body").css("background-image", "none");
    });
  });

  // Update the bookmarks list when #bookmark-add is clicked and when the user is navigating
  $("#bookmark-add").click(function(){
    if($(this).attr("data-state") == "add"){
      var newBookmark = window.prompt("Enter a custom name for your bookmark:");
      var newHash = location.hash || "#main"
      if(newBookmark){
        bookmarks.push(newHash);
        bookmarkLabels[newHash] = newBookmark;
      }
    } else {
      bookmarks.splice(bookmarks.indexOf(location.hash), 1);
      delete bookmarkLabels[location.hash];
    }
    updateBookmarks();
    updateStorage();
  });
  $(window).on("click", function(){
    updateBookmarks();
  });

  // Copy email to clipboard when .contact-card is clicked
  $(".contact-card").click(function(){
    var email = $(this).find("a").text();
    $("#copy-text").val(email).select();
    document.execCommand("copy");
    $("#copy-message").fadeIn(400);
    $("#copy-message").css("bottom", "60px");
    setTimeout(function(){
      $("#copy-message").fadeOut(400);
      $("#copy-message").css("bottom", "40px");
    }, 1500);
  });

  // Functionality for changing themes
  $(".theme-change").click(function(){
    theme = $(this).attr("data-theme-change");
    $("html").attr("data-theme", theme);
    updateStorage();
  });

  // Change the iframe of the guides modal to the appropriate URL when .guide is clicked
  $(".guide").click(function(){
    $("#guides-iframe").attr("src", $(this).attr("data-guide"));
    $("#modal-guides .modal-body").css("background-image", "");
    $("#guides-iframe").on("load", function(){
      $("#guides-iframe").css("opacity", "1");
      $("#modal-guides .modal-body").css("background-image", "none");
    });
  });

  // Reset the guides iframe when the modal is closed
  document.getElementById("modal-guides").addEventListener("hidden.bs.modal", function(e){
    $("#guides-iframe").replaceWith("<iframe src='' id='guides-iframe' class='modal-content-preview'></iframe>");
    $("#guides-iframe").css("opacity", "0");
  });

  // Show the correct page when .page-changer is clicked
  $(".page-changer").click(function(){
    $(".page").fadeOut(200);
    var moveTo = "#" + $(this).attr("data-go");
    var current = $(this).parent().parent().parent().attr("id");
    location.hash = $(this).attr("data-go").replace("page-", "");
    if(location.hash == "#main"){
      history.pushState("", document.title, window.location.pathname);
    }
    // In case the clicked button navigates to the course content page, show the needed buttons for that course
    if($(this).attr("data-go") == "page-course" && $(this).attr("data-forward") == "true"){
      $("#course-back").attr("data-go", current);
      location.hash = current.replace("page-", "") + "#" + $(this).attr("data-course");
      showNeededPages($(this).attr("data-course"));
    }
    // Reset everything back to normal when the back button in the iframe page is clicked
    if($(this).attr("data-forward") == "false"){
      location.hash = $(this).attr("data-hash");
      setTimeout(function(){
        $("#top").fadeIn(200);
        $("#iframe-wrap").css("background-image", "url('loader.svg')");
        $("#iframe-gdrive").replaceWith("<iframe id='iframe-gdrive' src='empty.html'></iframe>");
        $("body").css("overflow", "visible");
        $("#table-files tbody").html("");
      }, 200);
    }
    setTimeout(function(){
      $(moveTo).fadeIn(200);
      // This is in case the button navigates to the guides page
      guideResize();
    }, 200);
  });

  // Load book thumbnails if the current page is the books page or if #bigbtn-book is clicked
  if(location.hash == "#books"){
    for(var i = 0; i < $(".book-cover").length; i++){
      $(".book-cover").eq(i).attr("src", $(".book-cover").eq(i).attr("data-src"));
    }
  }
  $("#bigbtn-books").click(function(){
    for(var i = 0; i < $(".book-cover").length; i++){
      $(".book-cover").eq(i).attr("src", $(".book-cover").eq(i).attr("data-src"));
    }
  });

  // Show the Google Drive iframe with the correct file ID when .course-content is clicked
  // Alternatively, if folders are supposed to be shown, list them under #table-files
  $(".course-content").click(function(){
    $(".page").fadeOut(200);
    if($(this).attr("data-iframe") == "true"){
      $("#loader-overlay").fadeIn(400);
      $(".container").css("transform", "scale(0.75)");
      $("#table-files").hide();
      $("#iframe-wrap").show();
      $("#top").fadeOut(200);
      $("#iframe-wrap").height(200);
      $("body").css("overflow", "hidden");
      $("#iframe-gdrive").attr("src", "https://drive.google.com/embeddedfolderview?id=" + $(this).attr("data-id") + "#list");
      $("#iframe-gdrive").on("load", function(){
        iframeResize();
        $("#iframe-gdrive").css("opacity", "1");
        $("#iframe-wrap").css("background-image", "none");
        $("#loader-overlay").fadeOut(400);
        $(".container").css("transform", "scale(1)");
      });
    } else {
      var explorerFiles = JSON.parse($(this).attr("data-id"));
      $("#iframe-wrap").hide();
      $("#table-files").show();
      for(var i = 0; i < explorerFiles.length; i++){
        var newExplorerFile = "<tr><td class='table-file' data-bs-toggle='modal' data-bs-target='#modal-explorer' data-id='" + explorerFiles[i][1] + "'><i class='fa fa-folder-o'></i> " + explorerFiles[i][0] + "</td></tr>";
        $("#table-files tbody").append(newExplorerFile);
      }
    }
    setTimeout(function(){
      $("#page-files").fadeIn(200);
    }, 200);
    $("#iframe-back").attr("data-hash", location.hash);
    location.hash += "#" + $(this).attr("id").replace("c-", "");
  });

  // Reset the explorer iframe when the modal is closed
  document.getElementById("modal-explorer").addEventListener("hidden.bs.modal", function(e){
    $("#explorer-iframe").replaceWith("<iframe src='' id='explorer-iframe' class='modal-content-preview'></iframe>");
    $("#explorer-iframe").css("opacity", "0");
  });

  // Add animations for when the page is changed
  $(".page-changer, .course-content").click(function(){
    $("body").css("overflow", "hidden");
    transitioning = true;
    setTimeout(function(){transitioning = false}, 210);
    if($(this).hasClass("page-back") && $(this).attr("id") != "iframe-back"){
      $(".page").css("transform", "translateX(100px)");
      setTimeout(function(){$(".page").css("transition", "none").css("transform", "translateX(-100px)")}, 200);
      setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
    } else if($(this).attr("id") == "title" || $(this).attr("id") == "iframe-back"){
      $(".page").css("transform", "scale(0.8)");
      setTimeout(function(){$(".page").css("transition", "none").css("transform", "scale(1.2)"); $("body").css("overflow", "hidden")}, 200);
      setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
    } else if($(this).hasClass("course-content") && $(this).attr("data-iframe") != "true"){
      $(".page").css("transform", "scale(1.2)");
      setTimeout(function(){$(".page").css("transition", "none").css("transform", "scale(0.8)")}, 200);
      setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
    } else if($(this).attr("data-iframe") != "true"){
      $(".page").css("transform", "translateX(-100px)");
      setTimeout(function(){$(".page").css("transition", "none").css("transform", "translateX(100px)")}, 200);
      setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
    }
    showBtnsAnimation();
    setTimeout(function(){$("body").css("overflow", "visible")}, 400);
  });

  // Enable back and forward page navigation
  $(window).on("hashchange", function(){
    if(location.hash != lastHash){
      lastHash = JSON.parse(JSON.stringify(location.hash));
      if(!transitioning){
        $("body").css("overflow", "hidden");
        if(location.hash == $(historyBack).get(-2)){
          historyForward.push(historyBack.pop());
          $(".page").css("transform", "translateX(100px)");
          setTimeout(function(){$(".page").hide();pageFromHash();$(".page").css("transition", "none").css("transform", "translateX(-100px)")}, 200);
          setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
        } else if(location.hash == $(historyForward).get(-1)){
          historyBack.push(historyForward.pop());
          $(".page").css("transform", "translateX(-100px)");
          setTimeout(function(){$(".page").hide();pageFromHash();$(".page").css("transition", "none").css("transform", "translateX(100px)")}, 200);
          setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
        } else {
          if(location.hash == "#course"){
            if(historyForward.length && $(historyForward).get(-1).split("#").length == 3){
              history.forward()
            } else {
              history.back();
            }
          } else {
            historyBack.push(location.hash);
            historyForward = [];
            $(".page").css("transform", "scale(1.2)");
            setTimeout(function(){$(".page").hide();pageFromHash();$(".page").css("transition", "none").css("transform", "scale(0.8)")}, 200);
            setTimeout(function(){$(".page").css("transition", "transform 400ms").css("transform", "none")}, 210);
          }
        }
        showBtnsAnimation();
        setTimeout(function(){$("body").css("overflow", "visible")}, 400);
      } else {
        if(location.hash == $(historyBack).get(-2)){
          historyForward.push(historyBack.pop());
        } else if(location.hash == $(historyForward).get(-1)){
          historyBack.push(historyForward.pop());
        } else {
          historyBack.push(location.hash);
          historyForward = [];
        }
      }
    }
  });

  // Swiping right on phones should act as the back button, and swiping left should act as the forward button
  $(window).on("swiperight", function(){
    history.back();
  }).on("swipeleft", function(){
    history.forward();
  });

  // Enable stacking of modals on top of each other (used in the phase 3 randomiser)
  $(document).on("show.bs.modal", ".modal", function(){
    var zIndex = 1040 + 10 * $(".modal:visible").length;
    $(this).css("z-index", zIndex);
    setTimeout(function(){$(".modal-backdrop").not(".modal-stack").css("z-index", zIndex - 1).addClass("modal-stack")});
  });

  // Fix the problem where the scrollbar on body becomes hidden when #modal-randomiser-output shows up
  $(document).on("hide.bs.modal", ".modal", function(){
    setTimeout(function(){$("body").css("overflow", "visible")}, 310);
  });

  // Phase 3 group randomiser, perform checks first before execution
  $("#randomiser-btn").click(function(){
    $("#randomiser-form").removeClass("randomiser-error");
    var males = $("#randomiser-male").val().split("\n").filter(function(x){return x.replace(/ /g, "") !== ""});
    var females = $("#randomiser-female").val().split("\n").filter(function(x){return x.replace(/ /g, "") !== ""});
    if(males.concat(females).length){
      groupShuffle();
      var outputModal = new bootstrap.Modal($("#modal-randomiser-output"));
      outputModal.show();
    } else {
      setTimeout(function(){$("#randomiser-form").addClass("randomiser-error")});
    }
  });

  // As for the reshuffle button, there is no need to perform checks, as input values are certain to be valid
  $("#randomiser-reshuffle").click(function(){
    groupShuffle();
  });

  // Swap between exam, courses and student timetables when the timetable selector is clicked
  $(".timetable-item").click(function(){
    if(!$(this).hasClass("timetable-active")){
      var switchTo = $(this).attr("data-switch");
      $(".timetable-active").removeClass("timetable-active");
      $(this).addClass("timetable-active");
      $(".timetable-page").fadeOut(200);
      if(switchTo == "timetable-courses"){
        $("#modal-timetable .modal-body").css("overflow", "hidden");
      } else {
        $("#modal-timetable .modal-body").css("overflow", "auto");
      }
      setTimeout(function(){
        $("#" + switchTo).fadeIn(200);
      }, 200);
    }
    setTimeout(function(){previewResize()}, 210);
  });

  // Switch to the default exam timetable and show the exam timetable of the selected semester
  $("#timetable-exam-semester").val(semesterValues[defaultExamSemester]);
  $(".timer").hide();
  $(".timer[data-semester='" + defaultExamSemester + "']").show();
  $("#timetable-exam-semester").change(function(){
    var selectedSem = $("#timetable-exam-semester option:selected").attr("data-semester").toLowerCase();
    $(".timer").hide();
    $(".timer[data-semester='" + selectedSem + "']").show();
    defaultExamSemester = selectedSem;
    updateStorage();
  });

  // Switch to the default course timetables and show the course timetables of the selected semester and course
  $("#timetable-courses-semester").val(semesterValues[defaultCourseSemester]);
  $("#timetable-courses-course option").hide();
  $("#timetable-courses-course option[data-semester='" + defaultCourseSemester + "']").show();
  $("#timetable-courses-course").val($("#timetable-courses-course option[data-semester='" + defaultCourseSemester + "']:eq(0)").attr("value"));
  $("#timetable-courses-preview").attr("src", $("#timetable-courses-course option[data-semester='" + defaultCourseSemester + "']:eq(0)").attr("data-url"));
  $("#timetable-courses-semester").change(function(){
    var selectedSem = $("#timetable-courses-semester option:selected").attr("data-semester");
    $("#timetable-courses-course option").hide();
    $("#timetable-courses-course option[data-semester='" + selectedSem + "']").show();
    $("#timetable-courses-course").val($("#timetable-courses-course option[data-semester='" + selectedSem + "']:eq(0)").attr("value"));
    $("#timetable-courses-preview").replaceWith("<embed src='' id='timetable-courses-preview' class='modal-content-preview'>");
    $("#timetable-courses-preview").attr("src", $("#timetable-courses-course option[data-semester='" + selectedSem + "']:eq(0)").attr("data-url"));
    defaultCourseSemester = selectedSem;
    updateStorage();
    previewResize();
  });
  $("#timetable-courses-course").change(function(){
    var selectedCourse = $("#timetable-courses-course option:selected").attr("data-url");
    $("#timetable-courses-preview").replaceWith("<embed src='' id='timetable-courses-preview' class='modal-content-preview'>");
    $("#timetable-courses-preview").attr("src", selectedCourse);
    previewResize();
  });

  // Switch to the default student timetable and show the student timetable of the selected semester
  $("#timetable-student-semester").val(semesterValues[defaultStudentSemester]);
  $("#timetable-student-preview").attr("src", $("#timetable-student-semester option:selected").attr("data-url"));
  $("#timetable-student-semester").change(function(){
    var selectedSem = $("#timetable-student-semester option:selected").attr("data-semester");
    $("#timetable-student-preview").replaceWith("<img src='' id='timetable-student-preview' class='modal-content-preview'>");
    $("#timetable-student-preview").attr("src", $("#timetable-student-semester option:selected").attr("data-url"));
    defaultStudentSemester = selectedSem;
    updateStorage();
  });

  // Resize the iframe in the timetable modal to occupy the remaining space of the modal
  $(".modal-content-preview").on("load", function(){
    previewResize();
  });
});
