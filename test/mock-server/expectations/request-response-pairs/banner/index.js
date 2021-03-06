var app = require('../../../index');

/**
 * This file will have the fixtures for request and response. Each one has to export two functions getRequest and getResponse.
 * expectation directory will hold all the request reponse pairs of different types. middlewares added to the server will parse
 * these files and return the response when expecation is met
 *
 * The expecation created here is replicating trafficSourceCode example in Prebid.
 */

/**
 * This function will return the request object with all the entities method, path, body, header etc.
 *
 * @return {object} Request object
 */
exports.getRequest = function() {
  return {
    'httpRequest': {
      'method': 'POST',
      'path': '/',
      'body': {
        'tags': [{
          'sizes': [{
            'width': 300,
            'height': 250
          }, {
            'width': 300,
            'height': 600
          }],
          'primary_size': {
            'width': 300,
            'height': 250
          },
          'ad_types': ['banner'],
          'id': 13144370,
          'allow_smaller_sizes': false,
          'use_pmt_rule': false,
          'prebid': true,
          'disable_psa': true
        }],
        'user': {}
      }
    }
  }
}

/**
 * This function will return the response object with all the entities method, path, body, header etc.
 *
 * @return {object} Response object
 */
exports.getResponse = function() {
  return {
    'httpResponse': {
      'body': {
        'version': '3.0.0',
        'tags': [{
          'uuid': '2c8c83a1deaf1a',
          'tag_id': 13144370,
          'auction_id': '8147841645883553832',
          'nobid': false,
          'no_ad_url': 'http://sin3-ib.adnxs.com/it?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Fgpt%2Fhello_world.html%3Fpbjs_debug%3Dtrue&e=wqT_3QKzCKAzBAAAAwDWAAUBCJKPpe4FEKjwl-js2byJcRiq5MnUovf28WEqNgkAAAkCABEJBywAABkAAACA61HgPyEREgApEQkAMREb8GkwsqKiBjjtSEDtSEgAUABYnPFbYABotc95eACAAQGKAQCSAQNVU0SYAawCoAH6AagBAbABALgBAcABAMgBAtABANgBAOABAPABAIoCO3VmKCdhJywgMjUyOTg4NSwgMTU3MzQ3MjE0Nik7AR0scicsIDk2ODQ2MDM1Nh4A8PWSAqUCIXp6ZmhVQWl1c0s0S0VOT0JseTRZQUNDYzhWc3dBRGdBUUFSSTdVaFFzcUtpQmxnQVlJSUNhQUJ3Q0hncWdBRWtpQUVxa0FFQW1BRUFvQUVCcUFFRHNBRUF1UUVwaTRpREFBRGdQOEVCS1l1SWd3QUE0RF9KQVozRkl5WjA1Tm9fMlFFQUFBQUFBQUR3UC1BQkFQVUJBQUFBQUpnQ0FLQUNBTFVDQUFBQUFMMENBQUFBQU9BQ0FPZ0NBUGdDQUlBREFaZ0RBYWdEcnJDdUNyb0RDVk5KVGpNNk5EY3pOZUFEcUJXSUJBQ1FCQUNZQkFIQkIFRQkBCHlRUQkJAQEUTmdFQVBFEY0BkEg0QkFDSUJmOGuaAokBIUl3OTBCOikBJG5QRmJJQVFvQUQROFhEZ1B6b0pVMGxPTXpvME56TTFRS2dWUxFoDFBBX1URDAxBQUFXHQwAWR0MAGEdDABjHQzwQGVBQS7CAi9odHRwOi8vcHJlYmlkLm9yZy9kZXYtZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbNgCAOACrZhI6gJTDTrYdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2dwdC9oZWxsb193b3JsZAVO8EA_cGJqc19kZWJ1Zz10cnVlgAMAiAMBkAMAmAMXoAMBqgMAwAOsAsgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92Mw248F6YBACiBAsxMC43NS43NC42OagEkECyBBIIBBAEGKwCIPoBKAEoAjAAOAK4BADABADIBADSBA45MzI1I1NJTjM6NDczNdoEAggA4AQB8ATTgZcuiAUBmAUAoAX______wEDFAHABQDJBWmAFPA_0gUJCQkMcAAA2AUB4AUB8AUB-gUECAAQAJAGAJgGALgGAMEGCSM08L_IBgDQBvUv2gYWChAJFBkBUBAAGADgBgHyBgIIAIAHAYgHAKAHAQ..&s=68cfb6ed042ea47f5d3fc2c32cc068500e542066',
          'timeout_ms': 0,
          'ad_profile_id': 1182765,
          'rtb_video_fallback': false,
          'ads': [{
            'content_source': 'rtb',
            'ad_type': 'banner',
            'buyer_member_id': 9325,
            'advertiser_id': 2529885,
            'creative_id': 96846035,
            'media_type_id': 1,
            'media_subtype_id': 1,
            'cpm': 0.500000,
            'cpm_publisher_currency': 0.500000,
            'is_bin_price_applied': false,
            'publisher_currency_code': '$',
            'brand_category_id': 0,
            'client_initiated_ad_counting': true,
            'rtb': {
              'banner': {
                'content': "<!-- Creative 96846035 served by Member 9325 via AppNexus --><a href=\"http://sin3-ib.adnxs.com/click?AAAAAAAA4D8AAAAAAADgPwAAAIDrUeA_AAAAAAAA4D8AAAAAAADgPyj4Bc3O8hJxKnKSKrrb42GSR8ldAAAAADKRyABtJAAAbSQAAAIAAADTwMUFnPgWAAAAAABVU0QAVVNEACwB-gC1ZwAAAAABAQMCAAAAALwAUR2JEgAAAAA./bcr=AAAAAAAA8D8=/cnd=%21Iw90BAiusK4KENOBly4YnPFbIAQoADEAAAAAAADgPzoJU0lOMzo0NzM1QKgVSQAAAAAAAPA_UQAAAAAAAAAAWQAAAAAAAAAAYQAAAAAAAAAAaQAAAAAAAAAAcQAAAAAAAAAAeAA./cca=OTMyNSNTSU4zOjQ3MzU=/bn=89106/clickenc=http%3A%2F%2Fprebid.org%2Fdev-docs%2Fgetting-started.html\" target=\"_blank\"><img width=\"300\" height=\"250\" style=\"border-style: none\" src=\"http://vcdn.adnxs.com/p/creative-image/27/c0/52/67/27c05267-5a6d-4874-834e-18e218493c32.png\"/></a><iframe src=\"http://acdn.adnxs.com/dmp/async_usersync.html?gdpr=0&seller_id=9325&pub_id=1193043\" width=\"1\" height=\"1\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" topmargin=\"0\" leftmargin=\"0\" style=\"position:absolute;overflow:hidden;clip:rect(0 0 0 0);height:1px;width:1px;margin:-1px;padding:0;border:0;\"></iframe><script>try {!function(){function e(e,t){return\"function\"==typeof __an_obj_extend_thunk?__an_obj_extend_thunk(e,t):e}function t(e,t){\"function\"==typeof __an_err_thunk&&__an_err_thunk(e,t)}function n(e,t){if(\"function\"==typeof __an_redirect_thunk)__an_redirect_thunk(e);else{var n=navigator.connection;navigator.__an_connection&&(n=navigator.__an_connection),window==window.top&&n&&n.downlinkMax<=.115&&\"function\"==typeof HTMLIFrameElement&&HTMLIFrameElement.prototype.hasOwnProperty(\"srcdoc\")?(window.__an_resize=function(e,t,n){var r=e.frameElement;r&&\"__an_if\"==r.getAttribute(\"name\")&&(t&&(r.style.width=t+\"px\"),n&&(r.style.height=n+\"px\"))},document.write('<iframe name=\"__an_if\" style=\"width:0;height:0\" srcdoc=\"<script type=\\'text/javascript\\' src=\\''+e+\"&\"+t.bdfif+\"=1'></sc\"),document.write('ript>\" frameborder=\"0\" scrolling=\"no\" marginheight=0 marginwidth=0 topmargin=\"0\" leftmargin=\"0\" allowtransparency=\"true\"></iframe>')):document.write('<script language=\"javascript\" src=\"'+e+'\"></scr'+'ipt>')}};var r=function(e){this.rdParams=e};r.prototype={constructor:r,walkAncestors:function(e){try{if(!window.location.ancestorOrigins)return;for(var t=0,n=window.location.ancestorOrigins.length;n>t;t++)e.call(null,window.location.ancestorOrigins[t],t)}catch(r){\"undefined\"!=typeof console}return[]},walkUpWindows:function(e){var t,n=[];do try{t=t?t.parent:window,e.call(null,t,n)}catch(r){return\"undefined\"!=typeof console,n.push({referrer:null,location:null,isTop:!1}),n}while(t!=window.top);return n},getPubUrlStack:function(e){var n,r=[],o=null,i=null,a=null,c=null,d=null,s=null,u=null;for(n=e.length-1;n>=0;n--){try{a=e[n].location}catch(l){\"undefined\"!=typeof console,t(l,\"AnRDModule::getPubUrlStack:: location\")}if(a)i=encodeURIComponent(a),r.push(i),u||(u=i);else if(0!==n){c=e[n-1];try{d=c.referrer,s=c.ancestor}catch(l){\"undefined\"!=typeof console,t(l,\"AnRDModule::getPubUrlStack:: prevFrame\")}d?(i=encodeURIComponent(d),r.push(i),u||(u=i)):s?(i=encodeURIComponent(s),r.push(i),u||(u=i)):r.push(o)}else r.push(o)}return{stack:r,detectUrl:u}},getLevels:function(){var e=this.walkUpWindows(function(e,n){try{n.push({referrer:e.document.referrer||null,location:e.location.href||null,isTop:e==window.top})}catch(r){n.push({referrer:null,location:null,isTop:e==window.top}),\"undefined\"!=typeof console,t(r,\"AnRDModule::getLevels\")}});return this.walkAncestors(function(t,n){e[n].ancestor=t}),e},getRefererInfo:function(){var e=\"\";try{var n=this.getLevels(),r=n.length-1,o=null!==n[r].location||r>0&&null!==n[r-1].referrer,i=this.getPubUrlStack(n);e=this.rdParams.rdRef+\"=\"+i.detectUrl+\"&\"+this.rdParams.rdTop+\"=\"+o+\"&\"+this.rdParams.rdIfs+\"=\"+r+\"&\"+this.rdParams.rdStk+\"=\"+i.stack+\"&\"+this.rdParams.rdQs}catch(a){e=\"\",\"undefined\"!=typeof console,t(a,\"AnRDModule::getRefererInfo\")}return e}};var o=function(n){var o=\"\";try{n=e(n,0);var i=e(new r(n),1);return i.getRefererInfo()}catch(a){o=\"\",\"undefined\"!=typeof console,t(a,\"AnRDModule::executeRD\")}return o};;var c=\"http://sin3-ib.adnxs.com/rd_log?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Fgpt%2Fhello_world.html%3Fpbjs_debug%3Dtrue&e=wqT_3QKPCaCPBAAAAwDWAAUBCJKPpe4FEKjwl-js2byJcRiq5MnUovf28WEqNgkAAAECCOA_EQEHNAAA4D8ZAAAAgOtR4D8hERIAKREJADERG6gwsqKiBjjtSEDtSEgCUNOBly5YnPFbYABotc95eJK4BYABAYoBA1VTRJIBAQbwUpgBrAKgAfoBqAEBsAEAuAEBwAEDyAEC0AEA2AEA4AEA8AEAigI7dWYoJ2EnLCAyNTI5ODg1LCAxNTczNDcyMTQ2KTt1ZigncicsIDk2ODQ2MDM1Nh4A8PWSAqUCIXp6ZmhVQWl1c0s0S0VOT0JseTRZQUNDYzhWc3dBRGdBUUFSSTdVaFFzcUtpQmxnQVlJSUNhQUJ3Q0hncWdBRWtpQUVxa0FFQW1BRUFvQUVCcUFFRHNBRUF1UUVwaTRpREFBRGdQOEVCS1l1SWd3QUE0RF9KQVozRkl5WjA1Tm9fMlFFQUFBQUFBQUR3UC1BQkFQVUJBQUFBQUpnQ0FLQUNBTFVDQUFBQUFMMENBQUFBQU9BQ0FPZ0NBUGdDQUlBREFaZ0RBYWdEcnJDdUNyb0RDVk5KVGpNNk5EY3pOZUFEcUJXSUJBQ1FCQUNZQkFIQkIFRQkBCHlRUQkJAQEUTmdFQVBFEY0BkEg0QkFDSUJmOGuaAokBIUl3OTBCOikBJG5QRmJJQVFvQUQROFhEZ1B6b0pVMGxPTXpvME56TTFRS2dWUxFoDFBBX1URDAxBQUFXHQwAWR0MAGEdDABjHQzwQGVBQS7CAi9odHRwOi8vcHJlYmlkLm9yZy9kZXYtZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbNgCAOACrZhI6gJTDTrYdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2dwdC9oZWxsb193b3JsZAVOqD9wYmpzX2RlYnVnPXRydWXyAhMKD0NVU1RPTV9NT0RFTF9JRBIA8gIaChYyFgA8TEVBRl9OQU1FEgDyAh4KGjYdAAhBU1QBPuBJRklFRBIAgAMAiAMBkAMAmAMXoAMBqgMAwAOsAsgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92My8pDPBemAQAogQLMTAuNzUuNzQuNjmoBJBAsgQSCAQQBBisAiD6ASgBKAIwADgCuAQAwAQAyAQA0gQOOTMyNSNTSU4zOjQ3MzXaBAIIAeAEAfAE04GXLogFAZgFAKAF______8BAxQBwAUAyQVp3BTwP9IFCQkJDHAAANgFAeAFAfAFAfoFBAgAEACQBgCYBgC4BgDBBgkjNPA_yAYA0Ab1L9oGFgoQCRQZAVAQABgA4AYB8gYCCACABwGIBwCgBwE.&s=cd7fac7aae7cd2a4e08b7a9dab37a2db7ef2f834\";c+=\"&\"+o({rdRef:\"bdref\",rdTop:\"bdtop\",rdIfs:\"bdifs\",rdStk:\"bstk\",rdQs:\"\"}),n(c,{bdfif:\"bdfif\"})}();} catch (e) { }</script><div name=\"anxv\" lnttag=\"v;tv=view7-1h;st=0;d=300x250;vc=iab;vid_ccr=1;tag_id=13144370;cb=http%3A%2F%2Fsin3-ib.adnxs.com%2Fvevent%3Fan_audit%3D0%26referrer%3Dhttp%253A%252F%252Ftest.localhost%253A9999%252FintegrationExamples%252Fgpt%252Fhello_world.html%253Fpbjs_debug%253Dtrue%26e%3DwqT_3QK7CKA7BAAAAwDWAAUBCJKPpe4FEKjwl-js2byJcRiq5MnUovf28WEqNgkAAAECCOA_EQEHNAAA4D8ZAAAAgOtR4D8hERIAKREJADERG6gwsqKiBjjtSEDtSEgCUNOBly5YnPFbYABotc95eJK4BYABAYoBA1VTRJIBAQbwUpgBrAKgAfoBqAEBsAEAuAEBwAEDyAEC0AEA2AEA4AEA8AEAigI7dWYoJ2EnLCAyNTI5ODg1LCAxNTczNDcyMTQ2KTt1ZigncicsIDk2ODQ2MDM1Nh4A8PWSAqUCIXp6ZmhVQWl1c0s0S0VOT0JseTRZQUNDYzhWc3dBRGdBUUFSSTdVaFFzcUtpQmxnQVlJSUNhQUJ3Q0hncWdBRWtpQUVxa0FFQW1BRUFvQUVCcUFFRHNBRUF1UUVwaTRpREFBRGdQOEVCS1l1SWd3QUE0RF9KQVozRkl5WjA1Tm9fMlFFQUFBQUFBQUR3UC1BQkFQVUJBQUFBQUpnQ0FLQUNBTFVDQUFBQUFMMENBQUFBQU9BQ0FPZ0NBUGdDQUlBREFaZ0RBYWdEcnJDdUNyb0RDVk5KVGpNNk5EY3pOZUFEcUJXSUJBQ1FCQUNZQkFIQkIFRQkBCHlRUQkJAQEUTmdFQVBFEY0BkEg0QkFDSUJmOGuaAokBIUl3OTBCOikBJG5QRmJJQVFvQUQROFhEZ1B6b0pVMGxPTXpvME56TTFRS2dWUxFoDFBBX1URDAxBQUFXHQwAWR0MAGEdDABjHQzwQGVBQS7CAi9odHRwOi8vcHJlYmlkLm9yZy9kZXYtZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbNgCAOACrZhI6gJTDTrYdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2dwdC9oZWxsb193b3JsZAVO8EA_cGJqc19kZWJ1Zz10cnVlgAMAiAMBkAMAmAMXoAMBqgMAwAOsAsgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92Mw248F6YBACiBAsxMC43NS43NC42OagEkECyBBIIBBAEGKwCIPoBKAEoAjAAOAK4BADABADIBADSBA45MzI1I1NJTjM6NDczNdoEAggB4AQB8ATTgZcuiAUBmAUAoAX______wEDFAHABQDJBWmIFPA_0gUJCQkMcAAA2AUB4AUB8AUB-gUECAAQAJAGAJgGALgGAMEGCSM08D_IBgDQBvUv2gYWChAJFBkBUBAAGADgBgHyBgIIAIAHAYgHAKAHAQ..%26s%3Dcb94b0a48747da791eaadca70a6986348f9f0b90;ts=1573472146;cet=0;cecb=\" width=\"0\" height=\"0\" style=\"display: block; margin: 0; padding: 0; height: 0; width: 0;\"><script type=\"text/javascript\" async=\"true\" src=\"http://cdn.adnxs.com/v/s/181/trk.js\"></script></div>",
                'width': 300,
                'height': 250
              },
              'trackers': [{
                'impression_urls': ['http://sin3-ib.adnxs.com/it?an_audit=0&referrer=http%3A%2F%2Ftest.localhost%3A9999%2FintegrationExamples%2Fgpt%2Fhello_world.html%3Fpbjs_debug%3Dtrue&e=wqT_3QK7CKA7BAAAAwDWAAUBCJKPpe4FEKjwl-js2byJcRiq5MnUovf28WEqNgkAAAECCOA_EQEHNAAA4D8ZAAAAgOtR4D8hERIAKREJADERG6gwsqKiBjjtSEDtSEgCUNOBly5YnPFbYABotc95eJK4BYABAYoBA1VTRJIBAQbwUpgBrAKgAfoBqAEBsAEAuAEBwAEEyAEC0AEA2AEA4AEA8AEAigI7dWYoJ2EnLCAyNTI5ODg1LCAxNTczNDcyMTQ2KTt1ZigncicsIDk2ODQ2MDM1Nh4A8PWSAqUCIXp6ZmhVQWl1c0s0S0VOT0JseTRZQUNDYzhWc3dBRGdBUUFSSTdVaFFzcUtpQmxnQVlJSUNhQUJ3Q0hncWdBRWtpQUVxa0FFQW1BRUFvQUVCcUFFRHNBRUF1UUVwaTRpREFBRGdQOEVCS1l1SWd3QUE0RF9KQVozRkl5WjA1Tm9fMlFFQUFBQUFBQUR3UC1BQkFQVUJBQUFBQUpnQ0FLQUNBTFVDQUFBQUFMMENBQUFBQU9BQ0FPZ0NBUGdDQUlBREFaZ0RBYWdEcnJDdUNyb0RDVk5KVGpNNk5EY3pOZUFEcUJXSUJBQ1FCQUNZQkFIQkIFRQkBCHlRUQkJAQEUTmdFQVBFEY0BkEg0QkFDSUJmOGuaAokBIUl3OTBCOikBJG5QRmJJQVFvQUQROFhEZ1B6b0pVMGxPTXpvME56TTFRS2dWUxFoDFBBX1URDAxBQUFXHQwAWR0MAGEdDABjHQzwQGVBQS7CAi9odHRwOi8vcHJlYmlkLm9yZy9kZXYtZG9jcy9nZXR0aW5nLXN0YXJ0ZWQuaHRtbNgCAOACrZhI6gJTDTrYdGVzdC5sb2NhbGhvc3Q6OTk5OS9pbnRlZ3JhdGlvbkV4YW1wbGVzL2dwdC9oZWxsb193b3JsZAVO8EA_cGJqc19kZWJ1Zz10cnVlgAMAiAMBkAMAmAMXoAMBqgMAwAOsAsgDANgDAOADAOgDAPgDAYAEAJIEDS91dC92Mw248F6YBACiBAsxMC43NS43NC42OagEkECyBBIIBBAEGKwCIPoBKAEoAjAAOAK4BADABADIBADSBA45MzI1I1NJTjM6NDczNdoEAggB4AQB8ATTgZcuiAUBmAUAoAX______wEDFAHABQDJBWmIFPA_0gUJCQkMcAAA2AUB4AUB8AUB-gUECAAQAJAGAJgGALgGAMEGCSM08D_IBgDQBvUv2gYWChAJFBkBUBAAGADgBgHyBgIIAIAHAYgHAKAHAQ..&s=951a029669a69e3f0c527c937c2d852be92802e1'],
                'video_events': {}
              }]
            }
          }]
        }]
      },
    }
  }
}
