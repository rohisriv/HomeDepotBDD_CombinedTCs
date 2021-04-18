$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Diyprojectlistvisible.feature");
formatter.feature({
  "name": "Options in DIY Projects \u0026 Ideas List should appear",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC9"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Home Depot web page:",
  "rows": [
    {
      "cells": [
        "https://www.homedepot.com/"
      ]
    }
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_Home_Depot_web_page(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the browser window is maximized",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.the_browser_window_is_maximized()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user points mouse over \"DIY Projects \u0026 Ideas\" link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_points_mouse_over_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a dropdown should appear showing four columns:",
  "rows": [
    {
      "cells": [
        "Diyprojectslist"
      ]
    },
    {
      "cells": [
        "Home Decor Ideas"
      ]
    },
    {
      "cells": [
        "Home Improvement"
      ]
    },
    {
      "cells": [
        "Outdoor Living Ideas"
      ]
    },
    {
      "cells": [
        "Home Entertaining"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.a_dropdown_should_appear_showing_four_columns(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Features/Giftcards.feature");
formatter.feature({
  "name": "Gift cards from Home depot",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Buy Gift cards form Home depot",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Gift Cards link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_Gift_Cards_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Shop Now button of the Purchase a Gift Card section",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_Shop_Now_button_of_the_Purchase_a_Gift_Card_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Birthday from the Category dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_Birthday_from_the_Category_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects Someone else radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_Someone_else_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a Recipient name, Sender name and Sender message",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_enters_a_Recipient_name_Sender_name_and_Sender_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects amount of $50 denomination",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_amount_of_$_denomination(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Buy Now button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_Buy_Now_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to a page with title \"The Home Depot Gift Cards by CashStar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_is_directed_to_a_page_with_title(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Features/Localad.feature");
formatter.feature({
  "name": "HomeDepo Rental Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "HomeDepo Rental Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC5"
    }
  ]
});
formatter.step({
  "name": "User is already on HomeDepo Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of the home page is HomeDepo",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on local ad",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on tool rental",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on tillers",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on check availability",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks on check nearby stores",
  "keyword": "Then "
});
formatter.step({
  "name": "user clicks search box and enters \"\u003czipcode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "zipcode"
      ]
    },
    {
      "cells": [
        "60133"
      ]
    }
  ]
});
formatter.scenario({
  "name": "HomeDepo Rental Test Scenario",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TC5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is already on HomeDepo Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_already_on_HomeDepo_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of the home page is HomeDepo",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.title_of_the_home_page_is_HomeDepo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on local ad",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_local_ad()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on tool rental",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_tool_rental()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on tillers",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_tillers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on check availability",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_check_availability()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on check nearby stores",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_check_nearby_stores()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks search box and enters \"60133\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_search_box_and_enters_zip_code(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "HomeDepo Husky Test Scenario",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on ad page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_is_on_ad_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on husky link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_clicks_on_husky_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on tool bags",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_clicks_on_tool_bags()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees husky tool bags",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.user_sees_husky_tool_bags()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:Features/Searchanitem.feature");
formatter.feature({
  "name": "Search an item in HomeDepot",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successfully Search an item in Homedepot",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@TC2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User launches the chrome browser and enters the URL www.homedepot.com",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDef.user_launches_the_chrome_browser_and_enters_the_url_www_homedepot_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Wooden crates\" in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDef.user_enters_in_the_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the orange lens search icon",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_clicks_on_the_orange_lens_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects checkbox Less than 15 inch from the Product width filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_checkbox_Less_than_inch_from_the_Product_width_filter(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects checkbox 5-10 from the Product height filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_selects_checkbox_from_the_Product_height_filter(Integer,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select checkbox Unfinished Wood from the Color Family filter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.user_select_checkbox_Unfinished_Wood_from_the_Color_Family_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Three filter buttons are shown in the final search page of wooden crates",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDef.three_filter_buttons_are_shown_in_the_final_search_page_of_wooden_crates()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});