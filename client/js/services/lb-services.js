// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Applicant
 * @header lbServices.Applicant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Applicant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Applicant",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/applicants/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Applicant.education.findById() instead.
            "prototype$__findById__education": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/education/:fk",
              method: "GET",
            },

            // INTERNAL. Use Applicant.education.destroyById() instead.
            "prototype$__destroyById__education": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/education/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.education.updateById() instead.
            "prototype$__updateById__education": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/education/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.findById() instead.
            "prototype$__findById__applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/applicantSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.destroyById() instead.
            "prototype$__destroyById__applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/applicantSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.updateById() instead.
            "prototype$__updateById__applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/applicantSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Applicant.employments.findById() instead.
            "prototype$__findById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/employments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Applicant.employments.destroyById() instead.
            "prototype$__destroyById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/employments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.employments.updateById() instead.
            "prototype$__updateById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/employments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Applicant.education() instead.
            "prototype$__get__education": {
              isArray: true,
              url: urlBase + "/applicants/:id/education",
              method: "GET",
            },

            // INTERNAL. Use Applicant.education.create() instead.
            "prototype$__create__education": {
              url: urlBase + "/applicants/:id/education",
              method: "POST",
            },

            // INTERNAL. Use Applicant.education.destroyAll() instead.
            "prototype$__delete__education": {
              url: urlBase + "/applicants/:id/education",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.education.count() instead.
            "prototype$__count__education": {
              url: urlBase + "/applicants/:id/education/count",
              method: "GET",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels() instead.
            "prototype$__get__applicantSkillLevels": {
              isArray: true,
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.create() instead.
            "prototype$__create__applicantSkillLevels": {
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.destroyAll() instead.
            "prototype$__delete__applicantSkillLevels": {
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.count() instead.
            "prototype$__count__applicantSkillLevels": {
              url: urlBase + "/applicants/:id/applicantSkillLevels/count",
              method: "GET",
            },

            // INTERNAL. Use Applicant.employments() instead.
            "prototype$__get__employments": {
              isArray: true,
              url: urlBase + "/applicants/:id/employments",
              method: "GET",
            },

            // INTERNAL. Use Applicant.employments.create() instead.
            "prototype$__create__employments": {
              url: urlBase + "/applicants/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Applicant.employments.destroyAll() instead.
            "prototype$__delete__employments": {
              url: urlBase + "/applicants/:id/employments",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.employments.count() instead.
            "prototype$__count__employments": {
              url: urlBase + "/applicants/:id/employments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#create
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/applicants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#createMany
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/applicants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#patchOrCreate
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/applicants",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#replaceOrCreate
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/applicants/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#upsertWithWhere
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/applicants/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#exists
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/applicants/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#findById
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/applicants/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#replaceById
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/applicants/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#find
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/applicants",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#findOne
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/applicants/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#updateAll
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/applicants/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#deleteById
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/applicants/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#count
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/applicants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#prototype$patchAttributes
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/applicants/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#createChangeStream
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/applicants/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#topTenSkills
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Return topTenSkills
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `skills` – `{*=}` -
             */
            "topTenSkills": {
              url: urlBase + "/applicants/topTenSkills",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Applicant#topThreeSkills
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Return topThreeSkills
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{number}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `top3skills` – `{*=}` -
             */
            "topThreeSkills": {
              url: urlBase + "/applicants/:id/topThreeSkills",
              method: "GET",
            },

            // INTERNAL. Use Education.applicant() instead.
            "::get::Education::applicant": {
              url: urlBase + "/education/:id/applicant",
              method: "GET",
            },

            // INTERNAL. Use ApplicantSkillLevel.applicant() instead.
            "::get::ApplicantSkillLevel::applicant": {
              url: urlBase + "/ApplicantSkillLevels/:id/applicant",
              method: "GET",
            },

            // INTERNAL. Use Employment.applicant() instead.
            "::get::Employment::applicant": {
              url: urlBase + "/employments/:id/applicant",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Applicant#upsert
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Applicant#updateOrCreate
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Applicant#patchOrCreateWithWhere
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Applicant#update
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Applicant#destroyById
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Applicant#removeById
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Applicant#prototype$updateAttributes
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Applicant#modelName
        * @propertyOf lbServices.Applicant
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Applicant`.
        */
        R.modelName = "Applicant";

    /**
     * @ngdoc object
     * @name lbServices.Applicant.education
     * @header lbServices.Applicant.education
     * @object
     * @description
     *
     * The object `Applicant.education` groups methods
     * manipulating `Education` instances related to `Applicant`.
     *
     * Call {@link lbServices.Applicant#education Applicant.education()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Applicant#education
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Queries education of applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.education = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::get::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#count
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Counts education of applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.education.count = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::count::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#create
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Creates a new instance in education of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.education.create = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::create::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#createMany
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Creates a new instance in education of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.education.createMany = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::createMany::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#destroyAll
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Deletes all education of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.education.destroyAll = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::delete::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#destroyById
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Delete a related item by id for education.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for education
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.education.destroyById = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::destroyById::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#findById
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Find a related item by id for education.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for education
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.education.findById = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::findById::Applicant::education"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.education#updateById
             * @methodOf lbServices.Applicant.education
             *
             * @description
             *
             * Update a related item by id for education.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `fk` – `{*}` - Foreign key for education
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R.education.updateById = function() {
          var TargetResource = $injector.get("Education");
          var action = TargetResource["::updateById::Applicant::education"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Applicant.applicantSkillLevels
     * @header lbServices.Applicant.applicantSkillLevels
     * @object
     * @description
     *
     * The object `Applicant.applicantSkillLevels` groups methods
     * manipulating `ApplicantSkillLevel` instances related to `Applicant`.
     *
     * Call {@link lbServices.Applicant#applicantSkillLevels Applicant.applicantSkillLevels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Applicant#applicantSkillLevels
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Queries applicantSkillLevels of applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::get::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#count
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Counts applicantSkillLevels of applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.applicantSkillLevels.count = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::count::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#create
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Creates a new instance in applicantSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.create = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::create::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#createMany
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Creates a new instance in applicantSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.createMany = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::createMany::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#destroyAll
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Deletes all applicantSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.applicantSkillLevels.destroyAll = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::delete::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#destroyById
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Delete a related item by id for applicantSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for applicantSkillLevels
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.applicantSkillLevels.destroyById = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::destroyById::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#findById
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Find a related item by id for applicantSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for applicantSkillLevels
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.findById = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::findById::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.applicantSkillLevels#updateById
             * @methodOf lbServices.Applicant.applicantSkillLevels
             *
             * @description
             *
             * Update a related item by id for applicantSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `fk` – `{*}` - Foreign key for applicantSkillLevels
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.updateById = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::updateById::Applicant::applicantSkillLevels"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Applicant.employments
     * @header lbServices.Applicant.employments
     * @object
     * @description
     *
     * The object `Applicant.employments` groups methods
     * manipulating `Employment` instances related to `Applicant`.
     *
     * Call {@link lbServices.Applicant#employments Applicant.employments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Applicant#employments
             * @methodOf lbServices.Applicant
             *
             * @description
             *
             * Queries employments of applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::get::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#count
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Counts employments of applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employments.count = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::count::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#create
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Creates a new instance in employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.create = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::create::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#createMany
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Creates a new instance in employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.createMany = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::createMany::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#destroyAll
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Deletes all employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employments.destroyAll = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::delete::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#destroyById
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Delete a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employments.destroyById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::destroyById::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#findById
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Find a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.findById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::findById::Applicant::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Applicant.employments#updateById
             * @methodOf lbServices.Applicant.employments
             *
             * @description
             *
             * Update a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - applicant id
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.updateById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::updateById::Applicant::employments"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Education
 * @header lbServices.Education
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Education` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Education",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/education/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Education.applicant() instead.
            "prototype$__get__applicant": {
              url: urlBase + "/education/:id/applicant",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#create
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/education",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#createMany
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/education",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#patchOrCreate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/education",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#replaceOrCreate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/education/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#upsertWithWhere
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/education/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#exists
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/education/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#findById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/education/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#replaceById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/education/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#find
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/education",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#findOne
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/education/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#updateAll
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/education/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#deleteById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/education/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#count
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/education/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#prototype$patchAttributes
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - education id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/education/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Education#createChangeStream
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/education/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Applicant.education.findById() instead.
            "::findById::Applicant::education": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/education/:fk",
              method: "GET",
            },

            // INTERNAL. Use Applicant.education.destroyById() instead.
            "::destroyById::Applicant::education": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/education/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.education.updateById() instead.
            "::updateById::Applicant::education": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/education/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Applicant.education() instead.
            "::get::Applicant::education": {
              isArray: true,
              url: urlBase + "/applicants/:id/education",
              method: "GET",
            },

            // INTERNAL. Use Applicant.education.create() instead.
            "::create::Applicant::education": {
              url: urlBase + "/applicants/:id/education",
              method: "POST",
            },

            // INTERNAL. Use Applicant.education.createMany() instead.
            "::createMany::Applicant::education": {
              isArray: true,
              url: urlBase + "/applicants/:id/education",
              method: "POST",
            },

            // INTERNAL. Use Applicant.education.destroyAll() instead.
            "::delete::Applicant::education": {
              url: urlBase + "/applicants/:id/education",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.education.count() instead.
            "::count::Applicant::education": {
              url: urlBase + "/applicants/:id/education/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Education#upsert
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Education#updateOrCreate
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Education#patchOrCreateWithWhere
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Education#update
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Education#destroyById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Education#removeById
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Education#prototype$updateAttributes
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - education id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Education` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Education#modelName
        * @propertyOf lbServices.Education
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Education`.
        */
        R.modelName = "Education";


            /**
             * @ngdoc method
             * @name lbServices.Education#applicant
             * @methodOf lbServices.Education
             *
             * @description
             *
             * Fetches belongsTo relation applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - education id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R.applicant = function() {
          var TargetResource = $injector.get("Applicant");
          var action = TargetResource["::get::Education::applicant"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Skill
 * @header lbServices.Skill
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Skill` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Skill",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/skills/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Skill.employmentSkills.findById() instead.
            "prototype$__findById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyById() instead.
            "prototype$__destroyById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.updateById() instead.
            "prototype$__updateById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.findById() instead.
            "prototype$__findById__applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/applicantSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.destroyById() instead.
            "prototype$__destroyById__applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/applicantSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.updateById() instead.
            "prototype$__updateById__applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/applicantSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employments.findById() instead.
            "prototype$__findById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.employments.destroyById() instead.
            "prototype$__destroyById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employments.updateById() instead.
            "prototype$__updateById__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employments.link() instead.
            "prototype$__link__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employments.unlink() instead.
            "prototype$__unlink__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employments.exists() instead.
            "prototype$__exists__employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Skill.employmentSkills() instead.
            "prototype$__get__employmentSkills": {
              isArray: true,
              url: urlBase + "/skills/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.create() instead.
            "prototype$__create__employmentSkills": {
              url: urlBase + "/skills/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyAll() instead.
            "prototype$__delete__employmentSkills": {
              url: urlBase + "/skills/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.count() instead.
            "prototype$__count__employmentSkills": {
              url: urlBase + "/skills/:id/employmentSkills/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.applicantSkillLevels() instead.
            "prototype$__get__applicantSkillLevels": {
              isArray: true,
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.create() instead.
            "prototype$__create__applicantSkillLevels": {
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.destroyAll() instead.
            "prototype$__delete__applicantSkillLevels": {
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.count() instead.
            "prototype$__count__applicantSkillLevels": {
              url: urlBase + "/skills/:id/applicantSkillLevels/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.employments() instead.
            "prototype$__get__employments": {
              isArray: true,
              url: urlBase + "/skills/:id/employments",
              method: "GET",
            },

            // INTERNAL. Use Skill.employments.create() instead.
            "prototype$__create__employments": {
              url: urlBase + "/skills/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Skill.employments.destroyAll() instead.
            "prototype$__delete__employments": {
              url: urlBase + "/skills/:id/employments",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employments.count() instead.
            "prototype$__count__employments": {
              url: urlBase + "/skills/:id/employments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#create
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/skills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#createMany
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/skills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#patchOrCreate
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/skills",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#replaceOrCreate
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/skills/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#upsertWithWhere
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/skills/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#exists
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/skills/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#findById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/skills/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#replaceById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/skills/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#find
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/skills",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#findOne
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/skills/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#updateAll
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/skills/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#deleteById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/skills/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#count
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/skills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#prototype$patchAttributes
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/skills/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Skill#createChangeStream
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/skills/change-stream",
              method: "POST",
            },

            // INTERNAL. Use EmploymentSkill.skill() instead.
            "::get::EmploymentSkill::skill": {
              url: urlBase + "/EmploymentSkills/:id/skill",
              method: "GET",
            },

            // INTERNAL. Use ApplicantSkillLevel.skill() instead.
            "::get::ApplicantSkillLevel::skill": {
              url: urlBase + "/ApplicantSkillLevels/:id/skill",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Skill#upsert
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#updateOrCreate
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#patchOrCreateWithWhere
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#update
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#destroyById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#removeById
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Skill#prototype$updateAttributes
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Skill#modelName
        * @propertyOf lbServices.Skill
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Skill`.
        */
        R.modelName = "Skill";

    /**
     * @ngdoc object
     * @name lbServices.Skill.employmentSkills
     * @header lbServices.Skill.employmentSkills
     * @object
     * @description
     *
     * The object `Skill.employmentSkills` groups methods
     * manipulating `EmploymentSkill` instances related to `Skill`.
     *
     * Call {@link lbServices.Skill#employmentSkills Skill.employmentSkills()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Skill#employmentSkills
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Queries employmentSkills of skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::get::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#count
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Counts employmentSkills of skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employmentSkills.count = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::count::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#create
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.create = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::create::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#createMany
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.createMany = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::createMany::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#destroyAll
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Deletes all employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employmentSkills.destroyAll = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::delete::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#destroyById
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Delete a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employmentSkills.destroyById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::destroyById::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#findById
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Find a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.findById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::findById::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employmentSkills#updateById
             * @methodOf lbServices.Skill.employmentSkills
             *
             * @description
             *
             * Update a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.updateById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::updateById::Skill::employmentSkills"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Skill.applicantSkillLevels
     * @header lbServices.Skill.applicantSkillLevels
     * @object
     * @description
     *
     * The object `Skill.applicantSkillLevels` groups methods
     * manipulating `ApplicantSkillLevel` instances related to `Skill`.
     *
     * Call {@link lbServices.Skill#applicantSkillLevels Skill.applicantSkillLevels()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Skill#applicantSkillLevels
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Queries applicantSkillLevels of skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::get::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#count
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Counts applicantSkillLevels of skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.applicantSkillLevels.count = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::count::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#create
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Creates a new instance in applicantSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.create = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::create::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#createMany
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Creates a new instance in applicantSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.createMany = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::createMany::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#destroyAll
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Deletes all applicantSkillLevels of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.applicantSkillLevels.destroyAll = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::delete::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#destroyById
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Delete a related item by id for applicantSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for applicantSkillLevels
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.applicantSkillLevels.destroyById = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::destroyById::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#findById
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Find a related item by id for applicantSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for applicantSkillLevels
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.findById = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::findById::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.applicantSkillLevels#updateById
             * @methodOf lbServices.Skill.applicantSkillLevels
             *
             * @description
             *
             * Update a related item by id for applicantSkillLevels.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `fk` – `{*}` - Foreign key for applicantSkillLevels
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R.applicantSkillLevels.updateById = function() {
          var TargetResource = $injector.get("ApplicantSkillLevel");
          var action = TargetResource["::updateById::Skill::applicantSkillLevels"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Skill.employments
     * @header lbServices.Skill.employments
     * @object
     * @description
     *
     * The object `Skill.employments` groups methods
     * manipulating `Employment` instances related to `Skill`.
     *
     * Call {@link lbServices.Skill#employments Skill.employments()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Skill#employments
             * @methodOf lbServices.Skill
             *
             * @description
             *
             * Queries employments of skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::get::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#count
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Counts employments of skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employments.count = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::count::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#create
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Creates a new instance in employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.create = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::create::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#createMany
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Creates a new instance in employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.createMany = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::createMany::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#destroyAll
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Deletes all employments of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employments.destroyAll = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::delete::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#destroyById
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Delete a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employments.destroyById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::destroyById::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#exists
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Check the existence of employments relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.exists = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::exists::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#findById
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Find a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.findById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::findById::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#link
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Add a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.link = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::link::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#unlink
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Remove the employments relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employments.unlink = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::unlink::Skill::employments"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Skill.employments#updateById
             * @methodOf lbServices.Skill.employments
             *
             * @description
             *
             * Update a related item by id for employments.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - skill id
             *
             *  - `fk` – `{*}` - Foreign key for employments
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employments.updateById = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::updateById::Skill::employments"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.EmploymentSkill
 * @header lbServices.EmploymentSkill
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `EmploymentSkill` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "EmploymentSkill",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/EmploymentSkills/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use EmploymentSkill.skill() instead.
            "prototype$__get__skill": {
              url: urlBase + "/EmploymentSkills/:id/skill",
              method: "GET",
            },

            // INTERNAL. Use EmploymentSkill.employment() instead.
            "prototype$__get__employment": {
              url: urlBase + "/EmploymentSkills/:id/employment",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#create
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/EmploymentSkills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#createMany
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/EmploymentSkills",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#patchOrCreate
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/EmploymentSkills",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#replaceOrCreate
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/EmploymentSkills/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#upsertWithWhere
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/EmploymentSkills/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#exists
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/EmploymentSkills/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#findById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/EmploymentSkills/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#replaceById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/EmploymentSkills/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#find
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/EmploymentSkills",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#findOne
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/EmploymentSkills/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#updateAll
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/EmploymentSkills/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#deleteById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/EmploymentSkills/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#count
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/EmploymentSkills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#prototype$patchAttributes
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/EmploymentSkills/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#createChangeStream
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/EmploymentSkills/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.findById() instead.
            "::findById::Skill::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyById() instead.
            "::destroyById::Skill::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.updateById() instead.
            "::updateById::Skill::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employmentSkills() instead.
            "::get::Skill::employmentSkills": {
              isArray: true,
              url: urlBase + "/skills/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Skill.employmentSkills.create() instead.
            "::create::Skill::employmentSkills": {
              url: urlBase + "/skills/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.createMany() instead.
            "::createMany::Skill::employmentSkills": {
              isArray: true,
              url: urlBase + "/skills/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Skill.employmentSkills.destroyAll() instead.
            "::delete::Skill::employmentSkills": {
              url: urlBase + "/skills/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employmentSkills.count() instead.
            "::count::Skill::employmentSkills": {
              url: urlBase + "/skills/:id/employmentSkills/count",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.findById() instead.
            "::findById::Employment::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employments/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyById() instead.
            "::destroyById::Employment::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employments/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.updateById() instead.
            "::updateById::Employment::employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employments/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employment.employmentSkills() instead.
            "::get::Employment::employmentSkills": {
              isArray: true,
              url: urlBase + "/employments/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.create() instead.
            "::create::Employment::employmentSkills": {
              url: urlBase + "/employments/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.createMany() instead.
            "::createMany::Employment::employmentSkills": {
              isArray: true,
              url: urlBase + "/employments/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyAll() instead.
            "::delete::Employment::employmentSkills": {
              url: urlBase + "/employments/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.count() instead.
            "::count::Employment::employmentSkills": {
              url: urlBase + "/employments/:id/employmentSkills/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#upsert
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#updateOrCreate
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#patchOrCreateWithWhere
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#update
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#destroyById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#removeById
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#prototype$updateAttributes
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.EmploymentSkill#modelName
        * @propertyOf lbServices.EmploymentSkill
        * @description
        * The name of the model represented by this $resource,
        * i.e. `EmploymentSkill`.
        */
        R.modelName = "EmploymentSkill";


            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#skill
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Fetches belongsTo relation skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R.skill = function() {
          var TargetResource = $injector.get("Skill");
          var action = TargetResource["::get::EmploymentSkill::skill"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.EmploymentSkill#employment
             * @methodOf lbServices.EmploymentSkill
             *
             * @description
             *
             * Fetches belongsTo relation employment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - EmploymentSkill id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R.employment = function() {
          var TargetResource = $injector.get("Employment");
          var action = TargetResource["::get::EmploymentSkill::employment"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.ApplicantSkillLevel
 * @header lbServices.ApplicantSkillLevel
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `ApplicantSkillLevel` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "ApplicantSkillLevel",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/ApplicantSkillLevels/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use ApplicantSkillLevel.applicant() instead.
            "prototype$__get__applicant": {
              url: urlBase + "/ApplicantSkillLevels/:id/applicant",
              method: "GET",
            },

            // INTERNAL. Use ApplicantSkillLevel.skill() instead.
            "prototype$__get__skill": {
              url: urlBase + "/ApplicantSkillLevels/:id/skill",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#create
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/ApplicantSkillLevels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#createMany
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/ApplicantSkillLevels",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#patchOrCreate
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/ApplicantSkillLevels",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#replaceOrCreate
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/ApplicantSkillLevels/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#upsertWithWhere
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/ApplicantSkillLevels/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#exists
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/ApplicantSkillLevels/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#findById
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/ApplicantSkillLevels/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#replaceById
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/ApplicantSkillLevels/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#find
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/ApplicantSkillLevels",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#findOne
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/ApplicantSkillLevels/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#updateAll
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/ApplicantSkillLevels/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#deleteById
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/ApplicantSkillLevels/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#count
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/ApplicantSkillLevels/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#prototype$patchAttributes
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApplicantSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/ApplicantSkillLevels/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#createChangeStream
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/ApplicantSkillLevels/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.findById() instead.
            "::findById::Applicant::applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/applicantSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.destroyById() instead.
            "::destroyById::Applicant::applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/applicantSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.updateById() instead.
            "::updateById::Applicant::applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/applicantSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels() instead.
            "::get::Applicant::applicantSkillLevels": {
              isArray: true,
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.create() instead.
            "::create::Applicant::applicantSkillLevels": {
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.createMany() instead.
            "::createMany::Applicant::applicantSkillLevels": {
              isArray: true,
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.destroyAll() instead.
            "::delete::Applicant::applicantSkillLevels": {
              url: urlBase + "/applicants/:id/applicantSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.applicantSkillLevels.count() instead.
            "::count::Applicant::applicantSkillLevels": {
              url: urlBase + "/applicants/:id/applicantSkillLevels/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.findById() instead.
            "::findById::Skill::applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/applicantSkillLevels/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.destroyById() instead.
            "::destroyById::Skill::applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/applicantSkillLevels/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.updateById() instead.
            "::updateById::Skill::applicantSkillLevels": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/applicantSkillLevels/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.applicantSkillLevels() instead.
            "::get::Skill::applicantSkillLevels": {
              isArray: true,
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "GET",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.create() instead.
            "::create::Skill::applicantSkillLevels": {
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.createMany() instead.
            "::createMany::Skill::applicantSkillLevels": {
              isArray: true,
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "POST",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.destroyAll() instead.
            "::delete::Skill::applicantSkillLevels": {
              url: urlBase + "/skills/:id/applicantSkillLevels",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.applicantSkillLevels.count() instead.
            "::count::Skill::applicantSkillLevels": {
              url: urlBase + "/skills/:id/applicantSkillLevels/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#upsert
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#updateOrCreate
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#patchOrCreateWithWhere
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#update
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#destroyById
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#removeById
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#prototype$updateAttributes
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApplicantSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `ApplicantSkillLevel` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.ApplicantSkillLevel#modelName
        * @propertyOf lbServices.ApplicantSkillLevel
        * @description
        * The name of the model represented by this $resource,
        * i.e. `ApplicantSkillLevel`.
        */
        R.modelName = "ApplicantSkillLevel";


            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#applicant
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Fetches belongsTo relation applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApplicantSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R.applicant = function() {
          var TargetResource = $injector.get("Applicant");
          var action = TargetResource["::get::ApplicantSkillLevel::applicant"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.ApplicantSkillLevel#skill
             * @methodOf lbServices.ApplicantSkillLevel
             *
             * @description
             *
             * Fetches belongsTo relation skill.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - ApplicantSkillLevel id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Skill` object.)
             * </em>
             */
        R.skill = function() {
          var TargetResource = $injector.get("Skill");
          var action = TargetResource["::get::ApplicantSkillLevel::skill"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Employment
 * @header lbServices.Employment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Employment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Employment",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/employments/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Employment.applicant() instead.
            "prototype$__get__applicant": {
              url: urlBase + "/employments/:id/applicant",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.findById() instead.
            "prototype$__findById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employments/:id/employmentSkills/:fk",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyById() instead.
            "prototype$__destroyById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employments/:id/employmentSkills/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.updateById() instead.
            "prototype$__updateById__employmentSkills": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/employments/:id/employmentSkills/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Employment.employmentSkills() instead.
            "prototype$__get__employmentSkills": {
              isArray: true,
              url: urlBase + "/employments/:id/employmentSkills",
              method: "GET",
            },

            // INTERNAL. Use Employment.employmentSkills.create() instead.
            "prototype$__create__employmentSkills": {
              url: urlBase + "/employments/:id/employmentSkills",
              method: "POST",
            },

            // INTERNAL. Use Employment.employmentSkills.destroyAll() instead.
            "prototype$__delete__employmentSkills": {
              url: urlBase + "/employments/:id/employmentSkills",
              method: "DELETE",
            },

            // INTERNAL. Use Employment.employmentSkills.count() instead.
            "prototype$__count__employmentSkills": {
              url: urlBase + "/employments/:id/employmentSkills/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#create
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/employments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#createMany
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/employments",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#patchOrCreate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "patchOrCreate": {
              url: urlBase + "/employments",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#replaceOrCreate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/employments/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#upsertWithWhere
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/employments/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#exists
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/employments/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#findById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/employments/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#replaceById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/employments/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#find
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/employments",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#findOne
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit - must be a JSON-encoded string ({"something":"value"})
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/employments/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#updateAll
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/employments/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#deleteById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/employments/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#count
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/employments/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#prototype$patchAttributes
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
            "prototype$patchAttributes": {
              url: urlBase + "/employments/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Employment#createChangeStream
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/employments/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Applicant.employments.findById() instead.
            "::findById::Applicant::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/employments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Applicant.employments.destroyById() instead.
            "::destroyById::Applicant::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/employments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.employments.updateById() instead.
            "::updateById::Applicant::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/applicants/:id/employments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Applicant.employments() instead.
            "::get::Applicant::employments": {
              isArray: true,
              url: urlBase + "/applicants/:id/employments",
              method: "GET",
            },

            // INTERNAL. Use Applicant.employments.create() instead.
            "::create::Applicant::employments": {
              url: urlBase + "/applicants/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Applicant.employments.createMany() instead.
            "::createMany::Applicant::employments": {
              isArray: true,
              url: urlBase + "/applicants/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Applicant.employments.destroyAll() instead.
            "::delete::Applicant::employments": {
              url: urlBase + "/applicants/:id/employments",
              method: "DELETE",
            },

            // INTERNAL. Use Applicant.employments.count() instead.
            "::count::Applicant::employments": {
              url: urlBase + "/applicants/:id/employments/count",
              method: "GET",
            },

            // INTERNAL. Use Skill.employments.findById() instead.
            "::findById::Skill::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/:fk",
              method: "GET",
            },

            // INTERNAL. Use Skill.employments.destroyById() instead.
            "::destroyById::Skill::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employments.updateById() instead.
            "::updateById::Skill::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employments.link() instead.
            "::link::Skill::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Skill.employments.unlink() instead.
            "::unlink::Skill::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employments.exists() instead.
            "::exists::Skill::employments": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/skills/:id/employments/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Skill.employments() instead.
            "::get::Skill::employments": {
              isArray: true,
              url: urlBase + "/skills/:id/employments",
              method: "GET",
            },

            // INTERNAL. Use Skill.employments.create() instead.
            "::create::Skill::employments": {
              url: urlBase + "/skills/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Skill.employments.createMany() instead.
            "::createMany::Skill::employments": {
              isArray: true,
              url: urlBase + "/skills/:id/employments",
              method: "POST",
            },

            // INTERNAL. Use Skill.employments.destroyAll() instead.
            "::delete::Skill::employments": {
              url: urlBase + "/skills/:id/employments",
              method: "DELETE",
            },

            // INTERNAL. Use Skill.employments.count() instead.
            "::count::Skill::employments": {
              url: urlBase + "/skills/:id/employments/count",
              method: "GET",
            },

            // INTERNAL. Use EmploymentSkill.employment() instead.
            "::get::EmploymentSkill::employment": {
              url: urlBase + "/EmploymentSkills/:id/employment",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Employment#upsert
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["upsert"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#updateOrCreate
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["updateOrCreate"] = R["patchOrCreate"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#patchOrCreateWithWhere
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#update
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#destroyById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#removeById
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Employment#prototype$updateAttributes
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Employment` object.)
             * </em>
             */
        R["prototype$updateAttributes"] = R["prototype$patchAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Employment#modelName
        * @propertyOf lbServices.Employment
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Employment`.
        */
        R.modelName = "Employment";


            /**
             * @ngdoc method
             * @name lbServices.Employment#applicant
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Fetches belongsTo relation applicant.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `refresh` – `{boolean=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Applicant` object.)
             * </em>
             */
        R.applicant = function() {
          var TargetResource = $injector.get("Applicant");
          var action = TargetResource["::get::Employment::applicant"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Employment.employmentSkills
     * @header lbServices.Employment.employmentSkills
     * @object
     * @description
     *
     * The object `Employment.employmentSkills` groups methods
     * manipulating `EmploymentSkill` instances related to `Employment`.
     *
     * Call {@link lbServices.Employment#employmentSkills Employment.employmentSkills()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Employment#employmentSkills
             * @methodOf lbServices.Employment
             *
             * @description
             *
             * Queries employmentSkills of employment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `filter` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::get::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#count
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Counts employmentSkills of employment.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.employmentSkills.count = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::count::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#create
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.create = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::create::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#createMany
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Creates a new instance in employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.createMany = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::createMany::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#destroyAll
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Deletes all employmentSkills of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `where` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employmentSkills.destroyAll = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::delete::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#destroyById
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Delete a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.employmentSkills.destroyById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::destroyById::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#findById
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Find a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `options` – `{object=}` -
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.findById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::findById::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Employment.employmentSkills#updateById
             * @methodOf lbServices.Employment.employmentSkills
             *
             * @description
             *
             * Update a related item by id for employmentSkills.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - employment id
             *
             *  - `fk` – `{*}` - Foreign key for employmentSkills
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             *  - `data` – `{object=}` -
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `EmploymentSkill` object.)
             * </em>
             */
        R.employmentSkills.updateById = function() {
          var TargetResource = $injector.get("EmploymentSkill");
          var action = TargetResource["::updateById::Employment::employmentSkills"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
