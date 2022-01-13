!function(t){var e={};function n(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=67)}({1:function(t,e){t.exports=lodash},14:function(t,e,n){"use strict";var a=n(2),i=n.n(a);e.a=function(t,e,n){return i.a.ajax({url:rankMath.ajaxurl,type:n||"POST",dataType:"json",data:i.a.extend(!0,{action:"rank_math_"+t,security:rankMath.security},e)})}},18:function(t,e,n){"use strict";var a=n(2),i=n.n(a);e.a=function(t,e,n,a){e=e||"error",a=a||!1;var r=i()('<div class="notice notice-'+e+' is-dismissible"><p>'+t+"</p></div>").hide();n.next(".notice").remove(),n.after(r),r.slideDown(),i()(document).trigger("wp-updates-notice-added"),a&&setTimeout((function(){r.fadeOut((function(){r.remove()}))}),a)}},2:function(t,e){t.exports=jQuery},67:function(t,e,n){"use strict";n.r(e);var a,i=n(2),r=n.n(i),o=n(1),s=n(14),c=n(18);(a=r.a)((function(){window.rankMathOptions={init:function(){this.misc(),this.preview(),this.scCache(),rankMathAdmin.variableInserter(),this.searchEngine.init(),this.addressFormat(),this.siteMap(),this.robotsEvents(),this.proRedirect(),this.contentAI()},searchEngine:{init:function(){a("#setting-panel-analytics").addClass("exclude"),this.form=a(".rank-math-search-options"),this.wrap=this.form.closest(".rank-math-wrap-settings"),this.input=this.form.find("input"),this.tabs=this.wrap.find(".rank-math-tabs"),this.panels=this.wrap.find(".rank-math-tab:not(.exclude)"),this.ids=["general","titles","sitemap"],this.indexes={},this.buildIndex(),this.events()},events:function(){var t=this,e=t.tabs.find(">.rank-math-tabs-navigation"),n=a('<div class="rank-math-search-dropdown"></div>');t.tabs.find(">.rank-math-tabs-content").prepend('<div class="rank-math-setting-search-empty hidden">No results found.</div>'),t.form.append(n),n.hide().empty();var i=Object(o.debounce)((function(e){t.wrap.addClass("searching"),t.searchIndexes(e,n)}),300);t.form.on("click",".clear-search",(function(n){n.preventDefault(),t.input.val(""),t.clearSearch(e)})),this.ids.forEach((function(e){n.append(t.indexes[e])})),t.input.on("input",(function(){if(""===t.input.val())return t.clearSearch(e,n),!1;i(t.input.val().toLowerCase())})),n.on("click",".cmb-row",(function(){var t=a(this),e=window.location.origin+window.location.pathname+"?page=rank-math-options-"+t.data("settings-id")+"#"+t.closest(".dropdown-tab").data("id");e===window.location.href?window.location.reload():window.location=e}));var r=a(".rank-math-search-options, .rank-math-search-options *, .rank-math-search-dropdown, .rank-math-search-dropdown *");a("body").on("click",(function(t){a(t.target).is(r)||n.hide()}))},searchIndexes:function(t,e){if(!(1>t.trim().length)){e.find(".dropdown-tab").each((function(){var t=a(this);"setting-panel-analytics"===t.attr("data-id")&&t.css("display","none")}));var n=e.find(".cmb-row"),i=0;n.hide().each((function(){var e=a(this);e.text().trim().toLowerCase().includes(t)&&(e.show(),++i)})),e.show(),e.toggleClass("empty",0===i)}},clearSearch:function(t,e){e=e||!1,this.wrap.removeClass("searching search-no-results"),a(">a.active",t).trigger("click"),e?e.hide():(a(".cmb-row").show(),a(".rank-math-cmb-dependency",".cmb-form, .rank-math-metabox-wrap").each((function(){rankMathAdmin.loopDependencies(a(this))})))},buildIndex:function(){var t=window.localStorage.getItem("rank-math-option-search-index"),e=void 0===t||t!==rankMath.version;this.ids.forEach((function(t){this.getIndex(t,e)}),this),e&&window.localStorage.setItem("rank-math-option-search-index",rankMath.version)},getIndex:function(t,e){var n=this;e?a("<div/>").load(rankMath.adminurl+"?page=rank-math-options-"+t,(function(e,i){if("error"!==i){var r=a(e).find(".rank-math-tabs-content");r.find(".rank-math-tab").each((function(){var t=a(this);t.removeClass().addClass("dropdown-tab"),t.attr("data-id",t.attr("id")),t.removeAttr("id"),t.find(".rank-math-notice").remove(),t.find(".rank-math-desc").remove()})),r.find(".rank-math-tab").removeClass().addClass("dropdown-tab").removeAttr("id"),r.find(".cmb-row").each((function(){var e=a(this);e.attr("data-settings-id",t),(e.hasClass("cmb-type-title")||e.hasClass("cmb-type-notice")||e.hasClass("rank-math-notice")||e.hasClass("rank-math-desc"))&&e.remove(),e.find(".cmb-td").children(":not(.cmb2-metabox-description)").remove(),e.find("label,.cmb2-metabox-description").unwrap(),e.removeAttr("data-fieldtype")})),r=r.html().replace(/(\r\n\t|\n|\r\t)/gm,""),n.indexes[t]=a(r),window.localStorage.setItem("rank-math-option-"+t+"-index",r)}})):n.indexes[t]=a(window.localStorage.getItem("rank-math-option-"+t+"-index"))}},scCache:function(){a(".console-cache-delete").on("click",(function(t){t.preventDefault();var e=a(this),n=e.data("days"),i=-1===n?rankMath.confirmClearImportedData:rankMath.confirmClear90DaysCache;window.confirm(i+" "+rankMath.confirmAction)&&(e.prop("disabled",!0),Object(s.a)("analytics_delete_cache",{days:n},"GET").always((function(){e.prop("disabled",!1)})).done((function(t){t&&t.success&&(Object(c.a)(rankMath.feedbackCacheDeleted,"success",a("h1",".rank-math-wrap-settings")),a(".rank-math-console-db-info").remove(),e.closest(".cmb-td").append(t.message))})))}));var t=a("#console_caching_control");a(".console-cache-update-manually").on("click",(function(e){e.preventDefault();var n=a(this),i=t.val();n.prop("disabled",!0),Object(s.a)("analytic_start_fetching",{days:i},"GET").done((function(t){t&&t.success?(Object(c.a)(t.message,"success",a("h1.page-title")),n.text("Fetching in Progress"),a(".cancel-fetch").prop("disabled",!1)):Object(c.a)("Unable to update cache due to: "+t.error,"error",a("h1.page-title"))}))})),a(".cancel-fetch").on("click",(function(t){t.preventDefault(),a(this).prop("disabled",!0),Object(s.a)("analytic_cancel_fetching",{},"GET").done((function(t){t&&t.success&&window.location.reload()}))}))},addressFormat:function(){var t=a("input[type=text], textarea",".rank-math-address-format");if(t.length){t.attr("autocomplete","off"),t.wrap('<div class="rank-math-variables-wrap"/>');var e=a("body"),n=t.parent(".rank-math-variables-wrap");n.append('<a href="#" class="rank-math-variables-button button button-secondary button-address"><span class="dashicons dashicons-arrow-down-alt2"></span></a>');var i=a("<ul/>"),r=a('<div class="rank-math-variables-dropdown"></div>');a.each({"{address} {locality}, {region} {postalcode}":"(New York, NY 12345)","{address} {postalcode}, {locality} {region}":"(New York 12345, NY)","{address} {locality} {postalcode}":"(New York NY 12345)","{postalcode} {region} {locality} {address}":"(12345 NY New York)","{address} {locality}":"(New York NY)"},(function(t,e){i.append('<li data-var="'+e+'"><strong>'+t+"</strong></li>")})),r.append(i),a("rank-math-variables-wrap:eq(0)").append(r);var o=a(".rank-math-variables-button, .rank-math-variables-button *, .rank-math-variables-dropdown, .rank-math-variables-dropdown *");e.on("click",(function(t){a(t.target).is(o)||r.hide()}));var s=r.find("input"),c=r.find("li");a(n).on("click",".rank-math-variables-button",(function(t){t.preventDefault(),a(this).after(r),c.show(),r.show(),s.val("").focus()})),r.on("click","li",(function(t){t.preventDefault();var e=a(this);e.closest(".rank-math-variables-wrap").find("textarea").val(e.find("strong").text())}))}},misc:function(){void 0!==r.a.fn.select2&&a("[data-s2-pages]").select2({ajax:{url:rankMath.ajaxurl+"?action=rank_math_search_pages",data:function(t){return{term:t.term,security:rankMath.security}},dataType:"json",delay:250},width:"100%",minimumInputLength:3}),a("#htaccess_accept_changes").on("change",(function(){a("#htaccess_content").prop("readonly",!this.checked)})),a(".reset-options").on("click",(function(){return!!window.confirm("Are you sure? You want to reset settings.")&&(a(window).off("beforeunload"),!0)}));var t=a(".rank-math-tabs");setTimeout((function(){window.localStorage.removeItem(t.attr("id"))}),1e3),a(".save-options").on("click",(function(){var e=a("> .rank-math-tabs-navigation > a.active",t);return window.localStorage.setItem(t.attr("id"),e.attr("href")),a(window).off("beforeunload"),!0}));var e=!1;a(window).on("load",(function(){a(".cmb-form").on("change","input:not(.notrack), textarea:not(.notrack), select:not(.notrack)",(function(){e=!0}))})),a(window).on("beforeunload",(function(){if(e)return"Are you sure? You didn't finish the form!"})),a(".custom-sep").on("keyup",(function(){var t=a(this);t.closest("li").find("input.cmb2-option").val(t.text()).trigger("change")})),a(".cmb-form").on("keydown","input",(function(t){"Enter"===t.key&&t.preventDefault()}))},preview:function(){a("[data-preview]").on("change",(function(){var t=a(this),e=null,n="";if(t.is(":radio")&&(e=t.closest(".cmb-td")),null!==e)if(e.hasClass("done"))t.is(":checked")&&(n=e.find("h5")).text(n.data("title").format(t.val()));else if(e.addClass("done"),"title"===t.data("preview")){var i="";i+='<div class="rank-math-preview-title" data-title="Preview"><div>',i+='<h5 data-title="'+rankMath.postTitle+" {0} "+rankMath.blogName+'"></h5>',i+="<span>"+rankMath.postUri+"</span>",i+="</div></div>",e.append(i),(n=e.find("h5")).text(n.data("title").format(t.val()))}})).trigger("change")},siteMap:function(){var t=a(".sitemap-nginx-notice");t.length&&(t.on("click","a span",(function(e){return e.preventDefault(),t.toggleClass("active"),!1})),t.on("click","a.sitemap-close-notice",(function(e){return e.preventDefault(),Object(s.a)("remove_nginx_notice",{},"GET").done((function(){t.remove()})),!1})))},robotsEvents:function(){a(".rank-math-robots-data").each((function(){var t=a(this).find("ul li:first-child input"),e=a(this).find("ul li:nth-child(2) input");t.on("change",(function(){t.is(":checked")&&e.prop("checked",!1).trigger("change")})),e.on("change",(function(){e.is(":checked")&&t.prop("checked",!1)}))}))},proRedirect:function(){a(".cmb-redirector-element").on("click",(function(t){var e=a(t.target);if(e.is("a")||e.closest("a").length)return!0;var n=a(this),i=n.data("url");if(!i)return!0;t.preventDefault(),n.css("cursor","pointer"),window.open(i)}))},contentAI:function(){var t=a(".buy-more-credits .update-credit");t.length&&t.on("click",(function(e){return e.preventDefault(),t.addClass("loading"),Object(s.a)("get_content_ai_credits").done((function(e){e.error?alert(e.error):t.removeClass("loading").next("strong").text(e.credits)})),!1}))}},window.rankMathOptions.init()}))}});