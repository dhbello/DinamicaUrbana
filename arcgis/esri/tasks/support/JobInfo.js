// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.
//>>built
define("../../core/declare ../../core/kebabDictionary ../../core/JSONSupporter ./GPMessage dojo/_base/array dojo/_base/lang".split(" "),function(b,a,c,d,e,f){a=a({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});
return b(c,{declaredClass:"esri.tasks.support.JobInfo",jobId:"",jobStatus:"",_jobStatusReader:a.fromJSON,messages:[],_messagesReader:function(a){return e.map(a,function(a){return d.fromJSON(a)})}})});