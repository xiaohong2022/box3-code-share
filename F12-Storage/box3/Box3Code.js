function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
};

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
};

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
};

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
};

function raiseException(e) {
    const parsed = (0, parse_error_1.parseError)(e);
    while (parsed.stack.length > 0) {
        const top = parsed.stack[parsed.stack.length - 1];
        if (top.file === '<isolated-vm>') {
            parse_error_1.StackFrameSchema.free(top);
            parsed.stack.pop();
        }
        else {
            break;
        }
    }
    this.protocol.server.message.exception(parsed);
    parse_error_1.ParsedErrorSchema.free(parsed);
};

function setTimeout(fn, t, ...args) {
    const triggerAtMS = Math.max(currentMS + t, currentMS + MIN_TIMESTEP_MS);
    allocCount++;
    const node = pq.create(triggerAtMS, lastTaskId++);
    const id = node.taskId;
    waitingTimeouts.set(id, node);
    node.lambda = () => {
        waitingTimeouts.delete(id);
        try {
            fn.apply(undefined, args);
        }
        catch (e) {
            raiseError(e);
        }
        return true;
    };
    scheduleCount++;
    priorityQueue = pq.merge(priorityQueue, node);
    return id;
};

function setInterval(fn, t, ...args) {
    return __setInterval(fn, t, args);
}

function clearTimeout(id) {
    if (id < 0) {
        return;
    }
    if (priorityQueue.taskId === id) {
        selfCancelledTimeout = true;
        return;
    }
    const node = waitingTimeouts.get(id);
    if (node === undefined) {
        return;
    }
    node.lambda = pq.NIL_LAMBDA;
    node.weight = -100;
    priorityQueue = pq.decreaseKey(priorityQueue, node);
    dispatchCount++;
    priorityQueue = pq.takeMin(priorityQueue);
    freeCount++;
    pq.free(node);
    waitingTimeouts.delete(id);
};

function clearInterval(id) {
    if (id < 0) {
        return;
    }
    if (priorityQueue.taskId === id) {
        selfCancelledTimeout = true;
        return;
    }
    const node = waitingTimeouts.get(id);
    if (node === undefined) {
        return;
    }
    node.lambda = pq.NIL_LAMBDA;
    node.weight = -100;
    priorityQueue = pq.decreaseKey(priorityQueue, node);
    dispatchCount++;
    priorityQueue = pq.takeMin(priorityQueue);
    freeCount++;
    pq.free(node);
    waitingTimeouts.delete(id);
};

function sleep(timeMS) {
    const targetTime = this.scheduler.currentMS() + (+timeMS || 0);
    return new Promise((resolve) => {
        this.scheduler.scheduleAt(() => {
            resolve();
            return true;
        }, targetTime);
    });
};

const world = new Box3World(
    "map url",
    () => { return this.config.entityLimit - this.entityCount + this.playerCount; },
    (handler) => {
        const record = { finished: false, inQueue: true, handler, };
        if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); }
        return new api_1.Box3EventHandlerToken(
            () => { record.finished = true; },
            () => {
                if (this.destroyed) { return; }
                record.finished = false;
                if (!record.inQueue) {
                    record.inQueue = true; this.handlers.push(record);
                }
            },
            () => !record.finished);
    },
    (filter) => {
        if (this.destroyed) {
            return Promise.reject(new Error('dispatcher destroyed'));
        }
        return new Promise((resolve, reject) => {
            if (this.destroyed) {
                reject(new Error('dispatcher destroyed'));
                return;
            }
            exports.DISPATCHER_PROMISE_COUNT++;
            this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    (spec) => {
        if (this.entityCount - this.playerCount >= this.config.entityLimit) {
            console.error('entity limit exceeded');
            return null;
        }
        this.entityCount += 1;
        const id = ((++this.entityCounter) << 1) + 1;
        const wrapper = this._createEntity(id);
        const prevTags = wrapper.entity.tags;
        coerceEntityConfig(spec, wrapper.entity);
        const nextTags = wrapper.entity.tags; if (Array.isArray(nextTags)) {
            wrapper.entity.tags = prevTags;
            nextTags.forEach((t) => wrapper.entity.addTag(t));
        } this.physicsSelectors.notifyDirty();
        this.pendingCreate.push(id);
        this.notifyEntityCreate(wrapper);
        return wrapper.entity;
    },
    (selector) => {
        const testSelector = new selectors_1.ParsedSelector(selector + '');
        for (let i = 0; i < this.entities.length; ++i) {
            const wrapper = this.entities[i]; if (testSelector.testEntity(wrapper)) {
                return wrapper.entity;
            }
        } return null;
    },
    (selector) => {
        if (selector === '*') {
            return this.getEntities();
        } else if (selector === 'player') {
            return this.getPlayers();
        }
        const testSelector = new selectors_1.ParsedSelector(selector + '');
        const result = [];
        for (let i = 0; i < this.entities.length; ++i) {
            const wrapper = this.entities[i];
            if (testSelector.testEntity(wrapper)) {
                result.push(wrapper.entity);
            }
        } return result;
    }
    ,
    (selector, entity) => {
        const testSelector = new selectors_1.ParsedSelector(selector + '');
        const wrapper = this.wrapperIndex.get(entity);
        if (!wrapper) { return false; }
        return testSelector.testEntity(wrapper);
    },
    (a, b) => {
        this.physicsSelectors.addFilter(a + '', b + '');
    }, (a, b) => {
        this.physicsSelectors.removeFilter(a + '', b + '');
    }, () => {
        this.physicsSelectors.clear();
        this.zones.rebuildPhysicsSelectorIndex();
    }, () => {
        return this.physicsSelectors.list();
    },
    (origin, direction, options) => {
        const { x: ox, y: oy, z: oz } = (0, coerce_1.coerceVec3)(origin, new math_1.Box3Vector3(0, 0, 0));
        let { x: dx, y: dy, z: dz } = (0, coerce_1.coerceVec3)(direction, new math_1.Box3Vector3(0, 0, 0));
        const {
            maxDistance, ignoreEntities, ignoreFluid, ignoreVoxel, ignoreSelector,
        } = coerceRaycastOptions(options || {}, {
            maxDistance: Infinity, ignoreFluid: false, ignoreEntities: false, ignoreVoxel: false,
            ignoreSelector: '',
        });
        const l = Math.sqrt(dx * dx + dy * dy + dz * dz); if (l > 1e-8) { dx /= l; dy /= l; dz /= l; }
        const result = new api_1.Box3RaycastResult(false, null, 0, new math_1.Box3Vector3(ox, oy, oz), new math_1.Box3Vector3(dx, dy, dz), maxDistance, new math_1.Box3Vector3(0, 0, 0), new math_1.Box3Vector3(0, 0, 0), new math_1.Box3Vector3(0, 0, 0)); if (!ignoreEntities) {
            const bodyRaycast = raycast_bodies_1.BodyRaycastSchema.alloc();
            let { bodies } = this._shell.prevTickEvent.state.net; if (ignoreSelector) {
                const selector = new selectors_1.ParsedSelector(ignoreSelector);
                bodies = this.entity.entities
                    .filter((e) => !selector.testEntity(e))
                    .map((e) => (0, id_1.getById)(bodies, e.id))
                    .filter((o) => o);
            }
            if ((0, raycast_bodies_1.raycastBodies)(bodyRaycast, bodies, ox, oy, oz, dx, dy, dz, 0)) {
                const e = this.entity.entityIndex.get(bodyRaycast.hitId);
                if (e && bodyRaycast.hitTime < maxDistance) {
                    result.hit = true; result.hitEntity = e.entity;
                    result.distance = bodyRaycast.hitTime;
                    result.normal.x = bodyRaycast.hitNormal[0]; result.normal.y = bodyRaycast.hitNormal[1];
                    result.normal.z = bodyRaycast.hitNormal[2]; result.hitPosition.x = bodyRaycast.hitPosition[0];
                    result.hitPosition.y = bodyRaycast.hitPosition[1]; result.hitPosition.z = bodyRaycast.hitPosition[2];
                }
            } raycast_bodies_1.BodyRaycastSchema.free(bodyRaycast);
        } if (!ignoreVoxel) {
            const rayHit = new voxel_raycast_1.VoxelRaycastHitResult();
            if ((0, voxel_raycast_1.raycast)(rayHit, this._blockIndex,
                this._voxel.voxels, gl_matrix_1.vec3.fromValues(ox, oy, oz),
                gl_matrix_1.vec3.fromValues(dx, dy, dz), result.distance, ignoreFluid)) {
                result.hit = true; result.hitEntity = null; result.hitVoxel = rayHit.hitBlock;
                result.distance = rayHit.hitDistance; result.hitPosition.x = rayHit.hitPosition[0];
                result.hitPosition.y = rayHit.hitPosition[0]; result.hitPosition.z = rayHit.hitPosition[0];
                result.voxelIndex.x = rayHit.hitVoxel[0]; result.voxelIndex.y = rayHit.hitVoxel[1];
                result.voxelIndex.z = rayHit.hitVoxel[2]; result.normal.x = rayHit.hitNormal[0];
                result.normal.y = rayHit.hitNormal[1]; result.normal.z = rayHit.hitNormal[2];
            }
        } return result;
    },
    (bounds) => {
        const {
            lo: { x: lox, y: loy, z: loz }, hi: { x: hix, y: hiy, z: hiz }
        } = (0, coerce_1.coerceBounds)(bounds, new math_1.Box3Bounds3(new math_1.Box3Vector3(Infinity, Infinity, Infinity), new math_1.Box3Vector3(-Infinity, -Infinity, -Infinity)));
        const entities = [];
        const bodies = this._shell.prevTickEvent.state.net.bodies;
        for (let i = 0; i < bodies.length; ++i) {
            const { id, px, py, pz, rx, ry, rz } = bodies[i];
            if (px - rx < hix && lox < px + rx && py - ry < hiy && loy < py + ry && pz - rz < hiz && loz < pz + rz) {
                const wrapper = this.entity.entityIndex.get(id); if (wrapper && !wrapper.destroyed) {
                    entities.push(wrapper.entity);
                }
            }
        } return entities;
    },
    (keyframes, playbackInfo) => {
        if (this.destroyed) { throw new Error('Animation target is destroyed'); }
        if (!Array.isArray(keyframes) || keyframes.length < 1) {
            throw new Error('Must specify keyframes for animation');
        } if (keyframes.length > this.manager.config.keyframeLimit) {
            throw new Error('Too many keyframes. Maximum allowed keyframes is ' + this.manager.config.keyframeLimit);
        } if (this.manager.animations.size >= this.manager.config.animationLimit) {
            throw new Error('Animation limit exceeded');
        }
        const data = this.manager.binding.schema.alloc();
        data.id = this.manager.idCounter++; data.targetId = this.id;
        const animation = new ScriptAnimationWrapper(this, data);
        animation.parsePlayback(playbackInfo); this.manager.binding.parse(keyframes, data, this.manager.parserAPI); animation.fixReverseWrapOffset(playbackInfo);
        this.manager.modifyAnimationSet(animation, true, true);
        return animation.animation;
    },
    () => {
        if (this.destroyed) {
            throw new Error('Animation target is destroyed');
        }
        const result = []; for (const anim of this.animations.values()) {
            if (anim.scheduled) { result.push(anim.animation); }
        } return result;
    },
    () => {
        return [];
    }, () => {
        return [];
    },
    (handler) => {
        const record = {
            finished: false, inQueue: true, handler,
        };
        if (!this.destroyed) {
            exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record);
        } return new api_1.Box3EventHandlerToken(() => {
            record.finished = true;
        }, () => {
            if (this.destroyed) { return; }
            record.finished = false; if (!record.inQueue) {
                record.inQueue = true; this.handlers.push(record);
            }
        }, () => !record.finished);
    },
    (filter) => {
        if (this.destroyed) {
            return Promise.reject(new Error('dispatcher destroyed'));
        } return new Promise((resolve, reject) => {
            if (this.destroyed) {
                reject(new Error('dispatcher destroyed')); return;
            } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({
                finished: false, filter, resolve, reject,
            });
        });
    },
    (handler) => {
        const record = {
            finished: false, inQueue: true, handler,
        }; if (!this.destroyed) {
            exports.DISPATCHER_HANDLER_COUNT++;
            this.handlers.push(record);
        }
        return new api_1.Box3EventHandlerToken(() => {
            record.finished = true;
        }, () => {
            if (this.destroyed) { return; }
            record.finished = false; if (!record.inQueue) {
                record.inQueue = true; this.handlers.push(record);
            }
        },
            () => !record.finished);
    },
    (filter) => {
        if (this.destroyed) {
            return Promise.reject(new Error('dispatcher destroyed'));
        } return new Promise((resolve, reject) => {
            if (this.destroyed) {
                reject(new Error('dispatcher destroyed')); return;
            } exports.DISPATCHER_PROMISE_COUNT++;
            this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    (handler) => {
        const record = { finished: false, inQueue: true, handler, };
        if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished);
    },
    (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); }
        return new Promise((resolve, reject) => {
            if (this.destroyed) {
                reject(new Error('dispatcher destroyed')); return;
            } exports.DISPATCHER_PROMISE_COUNT++;
            this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    (handler) => {
        const record = { finished: false, inQueue: true, handler, };
        if (!this.destroyed) {
            exports.DISPATCHER_HANDLER_COUNT++;
            this.handlers.push(record);
        } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished);
    },
    (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => {
            if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; }
            exports.DISPATCHER_PROMISE_COUNT++;
            this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => {
        if (this.destroyed) {
            return Promise.reject(new Error('dispatcher destroyed'));
        } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); });
    },
    (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); }
        return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); });
    },
    (message) => {
        this._say(0, 0, message);
    }, (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); },
    (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (handler) => {
        const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } },
            () => !record.finished);
    },
    (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); }
        return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); });
    },
    (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); },
    (filter) => {
        if (this.destroyed) {
            return Promise.reject(new Error('dispatcher destroyed'));
        } return new Promise((resolve, reject) => {
            if (this.destroyed) {
                reject(new Error('dispatcher destroyed')); return;
            }
            exports.DISPATCHER_PROMISE_COUNT++;
            this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => {
            if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, });

        });
    },
    (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (handler) => {
        const record = { finished: false, inQueue: true, handler, };
        if (!this.destroyed) {
            exports.DISPATCHER_HANDLER_COUNT++;
            this.handlers.push(record);
        } return new api_1.Box3EventHandlerToken(() => {
            record.finished = true;
        }, () => {
            if (this.destroyed) {
                return;
            } record.finished = false; if (!record.inQueue) {
                record.inQueue = true; this.handlers.push(record);
            }
        },
            () => !record.finished);
    },
    (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => {
            if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; }
            exports.DISPATCHER_PROMISE_COUNT++;
            this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    (handler) => { const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; }, () => { if (this.destroyed) { return; } record.finished = false; if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); } }, () => !record.finished); }, (filter) => {
        if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); }
        return new Promise((resolve, reject) => {
            if (this.destroyed) {
                reject(new Error('dispatcher destroyed')); return;
            } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, });
        });
    },
    () => this.zones.map((t) => t.zone), (config) => {
        if (this.zones.length > zone_server_state_1.MAX_ZONES) {
            throw new Error('Zone quota exceeded');
        }
        this.perf.zonesCreated++;

        const result = new ScriptZoneWrapper(++this.zoneCounter, this);
        this.zones.push(result); zone_bindings_1.ZONE_INDEX.set(result.zone, result); (0, exports.coerceZone)(config, result.zone); result.currentSelectorTest = new selectors_1.ParsedSelector(result.zone.selector); result.zone.selector = result.currentSelectorString = result.currentSelectorTest.toNormalizedSelector(); if (result.needsPhysicsSelector()) {
            result.prevPhysicsSelectorState = true; this.physicsSelectors.setZoneSelector(result, result.currentSelectorString);
        } else { result.prevPhysicsSelectorState = false; result.physicsSelector = null; } return result.zone;
    },
    (zone) => { const wrapper = zone_bindings_1.ZONE_INDEX.get(zone); if (!wrapper) { return; } this.perf.zonesDestroyed++; zone_bindings_1.ZONE_INDEX.delete(zone); const idx = this.zones.indexOf(wrapper); if (idx >= 0) { this.zones.splice(idx, 1); } for (const e of wrapper.activeEntities) { this.schedule(wrapper.onLeave, new api_1.Box3TriggerEvent(this._tick, e.entity)); } wrapper.activeEntities.clear(); wrapper.onEnter.destroy('removed zone', this.scheduler); wrapper.onLeave.destroy('removed zone', this.scheduler); }, (handler) => {
        const record = { finished: false, inQueue: true, handler, }; if (!this.destroyed) { exports.DISPATCHER_HANDLER_COUNT++; this.handlers.push(record); } return new api_1.Box3EventHandlerToken(() => { record.finished = true; },
            () => {
                if (this.destroyed) { return; } record.finished = false;
                if (!record.inQueue) { record.inQueue = true; this.handlers.push(record); }
            }, () => !record.finished);
    },
    (filter) => { if (this.destroyed) { return Promise.reject(new Error('dispatcher destroyed')); } return new Promise((resolve, reject) => { if (this.destroyed) { reject(new Error('dispatcher destroyed')); return; } exports.DISPATCHER_PROMISE_COUNT++; this.promise.push({ finished: false, filter, resolve, reject, }); }); }, (spec) => {
        if (typeof spec === 'string') { this._playSound(spec, { type: 'global', data: void 0 }, 1, 1, 0); } else if (typeof spec === 'object') {
            const sample = ('' + spec.sample) || ''; const pitch = 'pitch' in spec ? +(spec.pitch || 0) : 1; const gain = 'gain' in spec ? +(spec.gain || 0) : 1; const radius = +(spec.radius || 0); if ('position' in spec && radius) {
                const b = (0, coerce_1.coerceVec3)(spec.position, new math_1.Box3Vector3(0, 0, 0)); this._playSound(sample, { type: 'position', data: gl_matrix_1.vec3.fromValues(b[0], b[1], b[2]) }, gain, pitch, radius);
            } else {
                this._playSound(sample, {
                    type: 'global', data: void 0
                }, gain, pitch, radius);
            }
        }
    }
);

const voxels = new Box3Voxels(
    {
        x: 128,
        y: 128,
        z: 128
    },
    [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "acacia",
        "add",
        "air",
        "air_duct",
        "ampersand",
        "asterisk",
        "at",
        "backslash",
        "bamboo",
        "bat_window",
        "bear_footprint",
        "biscuit",
        "black",
        "black_glass",
        "blue",
        "blue_decorative_light",
        "blue_gift",
        "blue_glass",
        "blue_light",
        "blue_surface_01",
        "blue_surface_02",
        "blueberry_juice",
        "board0",
        "board1",
        "board10",
        "board11",
        "board12",
        "board13",
        "board14",
        "board15",
        "board2",
        "board3",
        "board4",
        "board5",
        "board6",
        "board7",
        "board8",
        "board9",
        "board_01",
        "board_02",
        "board_03",
        "board_04",
        "board_05",
        "board_06",
        "board_07",
        "bookshelf",
        "bounce_pad",
        "bracket_close",
        "bracket_open",
        "brick_01",
        "brick_02",
        "brick_red",
        "button",
        "cadet_blue",
        "candy",
        "caret",
        "carpet_01",
        "carpet_02",
        "carpet_03",
        "carpet_04",
        "carpet_05",
        "carpet_06",
        "carpet_07",
        "carpet_08",
        "carpet_09",
        "carpet_10",
        "carpet_11",
        "carpet_12",
        "carpet_13",
        "coffee",
        "coffee_gray",
        "colon",
        "color_glass",
        "comma",
        "conveyor",
        "crane_lantern",
        "crane_roof_01",
        "crane_roof_02",
        "cross_window",
        "dark_brick_00",
        "dark_brick_01",
        "dark_brick_02",
        "dark_grass",
        "dark_gray",
        "dark_orchid",
        "dark_red",
        "dark_salmon",
        "dark_slate_blue",
        "dark_stone",
        "dark_surface",
        "dirt",
        "divide",
        "dollar",
        "eight",
        "equal",
        "exclamation_mark",
        "express_box",
        "fan",
        "firecracker",
        "five",
        "four",
        "fu",
        "geometric_window_01",
        "geometric_window_02",
        "glass",
        "gold_trim_brick",
        "grape_juice",
        "grass",
        "greater_than",
        "green_decorative_light",
        "green_glass",
        "green_leaf",
        "green_light",
        "greenbelt_L",
        "greenbelt_L1",
        "grey_stone_brick",
        "honeycomb_01",
        "honeycomb_02",
        "ice",
        "ice_brick",
        "ice_wall",
        "indigo_light",
        "lab_lamp_01",
        "lab_lamp_02",
        "lab_lamp_03",
        "lab_material_01",
        "lab_material_02",
        "lab_material_03",
        "lab_material_04",
        "lab_material_05",
        "lab_material_06",
        "lab_material_07",
        "lab_material_08",
        "lab_material_09",
        "lab_material_10",
        "lab_material_11",
        "lab_material_12",
        "lab_material_13",
        "lab_material_14",
        "lab_material_15",
        "lab_screen",
        "lab_wire",
        "lantern_01",
        "lantern_02",
        "lava01",
        "lava02",
        "leaf_01",
        "leaf_02",
        "leaf_03",
        "leaf_04",
        "leaf_05",
        "leaf_06",
        "ledfloor01",
        "ledfloor02",
        "lemon",
        "lemon_juice",
        "less_than",
        "light_gray",
        "light_grey_stone_brick",
        "lime_juice",
        "macaroon",
        "maroon",
        "medium_gray",
        "medium_green",
        "medium_orchid",
        "medium_purple",
        "medium_spring_green",
        "medium_violet_red",
        "medium_yellow",
        "milk",
        "mint_green",
        "mint_green_light",
        "multiply",
        "navajo_white",
        "nine",
        "olive_green",
        "one",
        "orange",
        "orange_juice",
        "orange_light",
        "orange_red",
        "palace_carving",
        "palace_cloud",
        "palace_eaves_01",
        "palace_eaves_02",
        "palace_eaves_03",
        "palace_eaves_04",
        "palace_eaves_05",
        "palace_eaves_06",
        "palace_eaves_07",
        "palace_eaves_08",
        "palace_floor",
        "palace_lamp",
        "palace_roof",
        "palace_window",
        "pale_green",
        "palm",
        "paren_close",
        "paren_open",
        "peach_juice",
        "percent",
        "period",
        "peru",
        "pink",
        "pink_cake",
        "pink_light",
        "plank_01",
        "plank_02",
        "plank_03",
        "plank_04",
        "plank_05",
        "plank_06",
        "plank_07",
        "polar_ice",
        "polar_region",
        "pound",
        "powder_blue",
        "pumpkin",
        "pumpkin_lantern",
        "purple",
        "purple_surface_01",
        "purple_surface_02",
        "quartz_brick",
        "question_mark",
        "quotation_mark",
        "rainbow_cube",
        "red",
        "red_brick",
        "red_brick_floor",
        "red_brick_wall",
        "red_decorative_light",
        "red_gift",
        "red_glass",
        "red_light",
        "rock",
        "roof_blue_04",
        "roof_green",
        "roof_grey",
        "roof_purple",
        "roof_red",
        "roof_yellow",
        "sakura_pink",
        "sand",
        "semicolon",
        "seven",
        "sienna",
        "six",
        "sky_blue",
        "slash",
        "snow",
        "snowflake_lamp",
        "snowland",
        "snowman_body",
        "snowman_head",
        "soy_sauce",
        "spiderweb",
        "stained_glass",
        "stainless_steel",
        "star_lamp",
        "stone",
        "stone_brick_01",
        "stone_brick_02",
        "stone_pillar_03",
        "stone_pillar_04",
        "stone_pillar_05",
        "stone_pillar_06",
        "stone_wall",
        "stone_wall_01",
        "strawberry_juice",
        "stripe_01",
        "stripe_02",
        "stripe_03",
        "stripe_04",
        "stripe_05",
        "subtract",
        "television",
        "three",
        "tilde",
        "toolbox",
        "traditional_window",
        "treasure_chest",
        "turquoise",
        "two",
        "warm_yellow_light",
        "water",
        "white",
        "white_grass",
        "white_light",
        "window",
        "windygrass",
        "winter_leaf",
        "wood",
        "wooden_box",
        "woodstone_12",
        "yellow_decorative_light",
        "yellow_grass",
        "yellow_green",
        "yellow_light",
        "zero"
    ],
    (name) => {
        if (typeof name !== 'string' || !(name in this.blockIndex.id)) {
            return 0;
        }
        return this.blockIndex.id[name] | 0;
    },
    (id) => {
        if (typeof id !== 'number' || !this.isValidVoxelType(id)) {
            return '';
        }
        return '' + this.blockIndex.name[id & exports.VOXEL_TYPE_MASK];
    },
    (x, y, z, b, r) => {
        return this.setVoxelId(x | 0, y | 0, z | 0, this.cuteVoxelId(b, r || 0));
    },
    (x, y, z) => {
        return this.getVoxelId(x, y, z) & exports.VOXEL_TYPE_MASK;
    },
    (x, y, z) => {
        return this.getVoxelId(x, y, z) >>> exports.VOXEL_ROTATION_SHIFT;
    },
    (x, y, z, b_) => {
        const b = b_ | 0;
        if (x >= 0 &&
            y >= 0 &&
            z >= 0 &&
            x < this.voxels.shape[0] - 1 &&
            y < this.voxels.shape[1] - 1 &&
            z < this.voxels.shape[2] - 1 &&
            this.isValidVoxelType(b)) {
            const xi = Math.floor(x);
            const yi = Math.floor(y);
            const zi = Math.floor(z);
            const prev = this.voxels.getVoxel(xi, yi, zi);
            if (prev !== b) {
                this._pendingWrites.push(new PendingVoxelWrite(xi, yi, zi, b, prev, this._writeCounter++));
                this.voxels.setVoxel(xi, yi, zi, b);
            }
            return b;
        }
        return 0;
    },
    (x, y, z) => {
        if (x >= 0 &&
            y >= 0 &&
            z >= 0 &&
            x < this.voxels.shape[0] - 1 &&
            y < this.voxels.shape[1] - 1 &&
            z < this.voxels.shape[2] - 1) {
            return this.voxels.getVoxel(Math.floor(x), Math.floor(y), Math.floor(z));
        }
        return 0;
    });

const resources = new Box3ResourceSystem(
    (_path) => {
        const path = this.normalizePath('' + (_path || ''));
        const resource = this.pathToHash[path];
        if (!resource) {
            throw new Error('file not found');
        }
        return resource.children.map((info) => new api_1.Box3AssetListEntry(info.path, info.type));
    }
);

const db = new Box3Database(
    (sql, ...params_) => {
        if (!Array.isArray(sql) || sql.length === 0 || typeof sql[0] !== 'string') {
            throw new Error(`db.sql must be called as a tag function. do not use ()`);
        }
        this.checkSQL(sql);
        const sqlExpr = sql;
        const params = this.prepareParams(params_);
        const q = new QueryWrapper({
            step: this.stepQuery,
            abort: this.abortQuery,
            schedule: this.schedule,
        });
        const h = q.handle = ++this.queryCounter;
        this.queries[h] = q;
        this.protocol.server.message.query({
            handle: h,
            sqlExpr,
            params,
        });
        return q.query;
    }
);

const http = new Box3HttpAPI( // 待修改
    "http://localhost",
    async (url, params) => {
        return new http_1.Box3HttpFetchResponse
            (
                500,
                'HTTP not implemented',
                () => Promise.reject('Not supported'),
                () => Promise.reject('Not supported'),
                () => Promise.reject('Not supported'),
                () => Promise.reject('Not supported')
            );
    },
    (handler) => {}
);

const require = (id) => this.resource.loadModule(id, null);

class Box3SoundEffect {
    constructor() {
        this.radius = 32;
        this.gain = 1;
        this.gainRange = 0;
        this.pitch = 1;
        this.pitchRange = 0;
        this.sample = '';
    }
};

class Box3Zone {
    constructor(entities, onEnter, nextEnter, onLeave, nextLeave, remove) {
        this.entities = entities;
        this.onEnter = onEnter;
        this.nextEnter = nextEnter;
        this.onLeave = onLeave;
        this.nextLeave = nextLeave;
        this.remove = remove;
        this.bounds = new math_1.Box3Bounds3(new math_1.Box3Vector3(0, 0, 0), new math_1.Box3Vector3(0, 0, 0));
        this.selector = '*';
        this.massScale = 0;
        this.force = new math_1.Box3Vector3(0, 0, 0);
        this.fogEnabled = false;
        this.fogColor = new math_1.Box3RGBColor(1, 1, 1);
        this.fogStartDistance = 0;
        this.fogHeightOffset = -8;
        this.fogHeightFalloff = 0.8;
        this.fogDensity = 0;
        this.fogMax = 1;
        this.snowEnabled = false;
        this.snowDensity = 1;
        this.snowSizeLo = 0.1;
        this.snowSizeHi = 1;
        this.snowFallSpeed = 1;
        this.snowSpinSpeed = 0;
        this.snowColor = new math_1.Box3RGBAColor(1, 1, 1, 1);
        this.snowTexture = 'snow/snow2.part';
        this.rainEnabled = false;
        this.rainDensity = 1;
        this.rainDirection = new math_1.Box3Vector3(0, 1, 0);
        this.rainSpeed = 1;
        this.rainSizeLo = 0.5;
        this.rainSizeHi = 0.5;
        this.rainInterference = 0;
        this.rainColor = new math_1.Box3RGBAColor(1, 1, 1, 1);
        this.skyEnabled = false;
        this.skyMode = 'natural';
        this.skySunPhase = 4 / 24;
        this.skySunFrequency = 0;
        this.skyLunarPhase = 0;
        this.skySunDirection = new math_1.Box3Vector3(0, -1, 0);
        this.skySunLight = new math_1.Box3RGBColor(1000, 1000, 1000);
        this.skyLeftLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyRightLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyBottomLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyTopLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyFrontLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyBackLight = new math_1.Box3RGBColor(0, 0, 0);
    }
};

class Box3Animation {
    constructor(target, keyframes, currentTime, startTime, playState, playbackRate, play, cancel, onReady, nextReady, onFinish, nextFinish) {
        this.target = target;
        this.keyframes = keyframes;
        this.play = play;
        this.cancel = cancel;
        this.onReady = onReady;
        this.nextReady = nextReady;
        this.onFinish = onFinish;
        this.nextFinish = nextFinish;
        this.currentTime = 0;
        this.startTime = 0;
        this.playState = Box3AnimationPlaybackState.PENDING;
        this.playbackRate = 1;
        Object.defineProperties(this, {
            'currentTime': {
                get: currentTime,
            },
            'startTime': {
                get: startTime,
            },
            'playState': {
                get: playState,
            },
            'playbackRate': {
                get: playbackRate,
            },
        });
    }
    then(resolve, reject) {
        return this.nextFinish().then(resolve, reject);
    }
};

class Box3World {
    constructor(url, entityQuota, onRespawn, nextRespawn, createEntity, querySelector, querySelectorAll, testSelector, addCollisionFilter, removeCollisionFilter, clearCollisionFilters, collisionFilters, raycast, searchBox, animate, getAnimations, getEntityAnimations, getPlayerAnimations, onTick, nextTick, onTakeDamage, nextTakeDamage, onDie, nextDie, onPlayerJoin, nextPlayerJoin, onPlayerLeave, nextPlayerLeave, onEntityCreate, nextEntityCreate, onEntityDestroy, nextEntityDestroy, say, onChat, nextChat, onClick, nextClick, onPress, nextPress, onRelease, nextRelease, onEntityContact, nextEntityContact, onEntitySeparate, nextEntitySeparate, onVoxelContact, nextVoxelContact, onVoxelSeparate, nextVoxelSeparate, onFluidEnter, nextFluidEnter, onFluidLeave, nextFluidLeave, zones, addZone, removeZone, onInteract, nextInteract, sound) {
        this.url = url;
        this.entityQuota = entityQuota;
        this.onRespawn = onRespawn;
        this.nextRespawn = nextRespawn;
        this.createEntity = createEntity;
        this.querySelector = querySelector;
        this.querySelectorAll = querySelectorAll;
        this.testSelector = testSelector;
        this.addCollisionFilter = addCollisionFilter;
        this.removeCollisionFilter = removeCollisionFilter;
        this.clearCollisionFilters = clearCollisionFilters;
        this.collisionFilters = collisionFilters;
        this.raycast = raycast;
        this.searchBox = searchBox;
        this.animate = animate;
        this.getAnimations = getAnimations;
        this.getEntityAnimations = getEntityAnimations;
        this.getPlayerAnimations = getPlayerAnimations;
        this.onTick = onTick;
        this.nextTick = nextTick;
        this.onTakeDamage = onTakeDamage;
        this.nextTakeDamage = nextTakeDamage;
        this.onDie = onDie;
        this.nextDie = nextDie;
        this.onPlayerJoin = onPlayerJoin;
        this.nextPlayerJoin = nextPlayerJoin;
        this.onPlayerLeave = onPlayerLeave;
        this.nextPlayerLeave = nextPlayerLeave;
        this.onEntityCreate = onEntityCreate;
        this.nextEntityCreate = nextEntityCreate;
        this.onEntityDestroy = onEntityDestroy;
        this.nextEntityDestroy = nextEntityDestroy;
        this.say = say;
        this.onChat = onChat;
        this.nextChat = nextChat;
        this.onClick = onClick;
        this.nextClick = nextClick;
        this.onPress = onPress;
        this.nextPress = nextPress;
        this.onRelease = onRelease;
        this.nextRelease = nextRelease;
        this.onEntityContact = onEntityContact;
        this.nextEntityContact = nextEntityContact;
        this.onEntitySeparate = onEntitySeparate;
        this.nextEntitySeparate = nextEntitySeparate;
        this.onVoxelContact = onVoxelContact;
        this.nextVoxelContact = nextVoxelContact;
        this.onVoxelSeparate = onVoxelSeparate;
        this.nextVoxelSeparate = nextVoxelSeparate;
        this.onFluidEnter = onFluidEnter;
        this.nextFluidEnter = nextFluidEnter;
        this.onFluidLeave = onFluidLeave;
        this.nextFluidLeave = nextFluidLeave;
        this.zones = zones;
        this.addZone = addZone;
        this.removeZone = removeZone;
        this.onInteract = onInteract;
        this.nextInteract = nextInteract;
        this.sound = sound;
        this.projectName = 'Project';
        this.currentTick = 0;
        this.lightMode = 'natural';
        this.sunPhase = 0;
        this.sunFrequency = 0;
        this.lunarPhase = 0;
        this.sunDirection = new math_1.Box3Vector3(0, -1, 0);
        this.sunLight = new math_1.Box3RGBColor(1000, 1000, 1000);
        this.skyLeftLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyRightLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyBottomLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyTopLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyFrontLight = new math_1.Box3RGBColor(0, 0, 0);
        this.skyBackLight = new math_1.Box3RGBColor(0, 0, 0);
        this.fogColor = new math_1.Box3RGBColor(1, 1, 1);
        this.fogStartDistance = 0;
        this.fogHeightOffset = 0;
        this.fogHeightFalloff = 0.8;
        this.fogUniformDensity = 0;
        this.maxFog = 1;
        this.snowDensity = 0;
        this.snowSizeLo = 0;
        this.snowSizeHi = 1;
        this.snowFallSpeed = 1;
        this.snowSpinSpeed = 0;
        this.snowColor = new math_1.Box3RGBAColor(1, 1, 1, 1);
        this.snowTexture = '';
        this.rainDensity = 0;
        this.rainDirection = new math_1.Box3Vector3(0, 1, 0);
        this.rainSpeed = 1;
        this.rainSizeLo = 0;
        this.rainSizeHi = 1;
        this.rainInterference = 0;
        this.rainColor = new math_1.Box3RGBAColor(1, 1, 1, 1);
        this.gravity = -0.1;
        this.airFriction = 0.001;
        this.breakVoxelSound = new Box3SoundEffect();
        this.placeVoxelSound = new Box3SoundEffect();
        this.playerJoinSound = new Box3SoundEffect();
        this.playerLeaveSound = new Box3SoundEffect();
        this.ambientSound = new Box3SoundEffect();
    }
};

class Box3Voxels {
    constructor(shape, VoxelTypes, id, name, setVoxel, getVoxel, getVoxelRotation, setVoxelId, getVoxelId) {
        this.shape = shape;
        this.VoxelTypes = VoxelTypes;
        this.id = id;
        this.name = name;
        this.setVoxel = setVoxel;
        this.getVoxel = getVoxel;
        this.getVoxelRotation = getVoxelRotation;
        this.setVoxelId = setVoxelId;
        this.getVoxelId = getVoxelId;
    }
};

class Box3Entity {
    constructor(tags, addTag, removeTag, hasTag, destroy, onDestroy, nextDestroy, onTakeDamage, nextTakeDamage, onDie, nextDie, hurt, say, animate, getAnimations, onClick, nextClick, onEntityContact, nextEntityContact, onEntitySeparate, nextEntitySeparate, onVoxelContact, nextVoxelContact, onVoxelSeparate, nextVoxelSeparate, onFluidEnter, nextFluidEnter, onFluidLeave, nextFluidLeave, onInteract, nextInteract, sound) {
        this.tags = tags;
        this.addTag = addTag;
        this.removeTag = removeTag;
        this.hasTag = hasTag;
        this.destroy = destroy;
        this.onDestroy = onDestroy;
        this.nextDestroy = nextDestroy;
        this.onTakeDamage = onTakeDamage;
        this.nextTakeDamage = nextTakeDamage;
        this.onDie = onDie;
        this.nextDie = nextDie;
        this.hurt = hurt;
        this.say = say;
        this.animate = animate;
        this.getAnimations = getAnimations;
        this.onClick = onClick;
        this.nextClick = nextClick;
        this.onEntityContact = onEntityContact;
        this.nextEntityContact = nextEntityContact;
        this.onEntitySeparate = onEntitySeparate;
        this.nextEntitySeparate = nextEntitySeparate;
        this.onVoxelContact = onVoxelContact;
        this.nextVoxelContact = nextVoxelContact;
        this.onVoxelSeparate = onVoxelSeparate;
        this.nextVoxelSeparate = nextVoxelSeparate;
        this.onFluidEnter = onFluidEnter;
        this.nextFluidEnter = nextFluidEnter;
        this.onFluidLeave = onFluidLeave;
        this.nextFluidLeave = nextFluidLeave;
        this.onInteract = onInteract;
        this.nextInteract = nextInteract;
        this.sound = sound;
        this.id = '';
        this.destroyed = false;
        this.position = new math_1.Box3Vector3(0, 0, 0);
        this.velocity = new math_1.Box3Vector3(0, 0, 0);
        this.bounds = new math_1.Box3Vector3(1, 1, 1);
        this.mass = 1;
        this.friction = 0;
        this.restitution = 0;
        this.collides = true;
        this.gravity = true;
        this.fixed = false;
        this.contactForce = new math_1.Box3Vector3(0, 0, 0);
        this.entityContacts = [];
        this.voxelContacts = [];
        this.fluidContacts = [];
        this.mesh = '';
        this.meshInvisible = false;
        this.meshScale = new math_1.Box3Vector3(1 / 64, 1 / 64, 1 / 64);
        this.meshOrientation = new math_1.Box3Quaternion(0, 0, 0, 1);
        this.meshOffset = new math_1.Box3Vector3(0, 0, 0);
        this.meshColor = new math_1.Box3RGBAColor(1, 1, 1, 1);
        this.meshMetalness = 0;
        this.meshEmissive = 0;
        this.meshShininess = 0;
        this.enableDamage = false;
        this.showHealthBar = true;
        this.hp = 100;
        this.maxHp = 100;
        this.isPlayer = false;
        this.particleRate = 0;
        this.particleRateSpread = 0;
        this.particleLimit = 100;
        this.particleColor = [
            new math_1.Box3RGBColor(1, 1, 1),
            new math_1.Box3RGBColor(1, 1, 1),
            new math_1.Box3RGBColor(1, 1, 1),
            new math_1.Box3RGBColor(1, 1, 1),
            new math_1.Box3RGBColor(1, 1, 1),
        ];
        this.particleSize = [1, 1, 1, 1, 1];
        this.particleSizeSpread = 0;
        this.particleLifetime = 10;
        this.particleLifetimeSpread = 0;
        this.particleVelocity = new math_1.Box3Vector3(0, 0, 0);
        this.particleVelocitySpread = new math_1.Box3Vector3(0, 0, 0);
        this.particleDamping = 0;
        this.particleAcceleration = new math_1.Box3Vector3(0, 0, 0);
        this.particleNoise = 0;
        this.particleNoiseFrequency = 1;
        this.particleTarget = null;
        this.particleTargetWeight = 1;
        this.enableInteract = false;
        this.interactColor = new math_1.Box3RGBColor(1, 1, 1);
        this.interactHint = '';
        this.interactRadius = 16;
        this.chatSound = new Box3SoundEffect();
        this.hurtSound = new Box3SoundEffect();
        this.dieSound = new Box3SoundEffect();
        this.interactSound = new Box3SoundEffect();
    }
};

class Box3EntityContact {
    constructor(other, force, axis) {
        this.other = other;
        this.force = force;
        this.axis = axis;
    }
};

class Box3VoxelContact {
    constructor(x, y, z, voxel, force, axis) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.voxel = voxel;
        this.force = force;
        this.axis = axis;
    }
};

class Box3FluidContact {
    constructor(voxel, volume) {
        this.voxel = voxel;
        this.volume = volume;
    }
};

class Box3Wearable {
    constructor() {
        this.player = null;
        this.bodyPart = Box3BodyPart.HEAD;
        this.mesh = '';
        this.color = new math_1.Box3RGBColor(1, 1, 1);
        this.emissive = 0;
        this.metalness = 0;
        this.shininess = 0;
        this.orientation = new math_1.Box3Quaternion(0, 1, 0, 0);
        this.scale = new math_1.Box3Vector3(1, 1, 1);
        this.offset = new math_1.Box3Vector3(0, 0, 0);
    }
    remove() {
        if (this.player) {
            this.player.removeWearable(this);
        }
    }
};

class Box3Player {
    constructor(directMessage, onChat, nextChat, onPress, nextPress, onRelease, nextRelease, onRespawn, nextRespawn, forceRespawn, dialog, cancelDialogs, link, wearables, addWearable, removeWearable, sound, animate, getAnimations, kick) {
        this.directMessage = directMessage;
        this.onChat = onChat;
        this.nextChat = nextChat;
        this.onPress = onPress;
        this.nextPress = nextPress;
        this.onRelease = onRelease;
        this.nextRelease = nextRelease;
        this.onRespawn = onRespawn;
        this.nextRespawn = nextRespawn;
        this.forceRespawn = forceRespawn;
        this.dialog = dialog;
        this.cancelDialogs = cancelDialogs;
        this.link = link;
        this.wearables = wearables;
        this.addWearable = addWearable;
        this.removeWearable = removeWearable;
        this.sound = sound;
        this.animate = animate;
        this.getAnimations = getAnimations;
        this.kick = kick;
        this.name = 'player';
        this.userKey = '';
        this.boxId = '';
        this.url = null;
        this.spawnPoint = new math_1.Box3Vector3(0, 0, 0);
        this.movementBounds = new math_1.Box3Bounds3(new math_1.Box3Vector3(-50, -50, -50), new math_1.Box3Vector3(178, 178, 178));
        this.scale = 1;
        this.color = new math_1.Box3RGBColor(1, 1, 1);
        this.metalness = 0;
        this.emissive = 0;
        this.shininess = 0;
        this.invisible = false;
        this.showName = true;
        this.dead = false;
        this.colorLUT = '';
        this.cameraMode = Box3CameraMode.FOLLOW;
        this.cameraEntity = null;
        this.cameraTarget = new math_1.Box3Vector3(0, 0, 0);
        this.cameraUp = new math_1.Box3Vector3(0, 1, 0);
        this.cameraPosition = new math_1.Box3Vector3(0, 0, 0);
        this.cameraFreezedAxis = Box3CameraFreezedAxis.NONE;
        this.cameraFovY = 0.25;
        this.cameraDistance = 8.5;
        this.canFly = false;
        this.spectator = false;
        this.walkSpeed = 0.22;
        this.walkAcceleration = 0.19;
        this.runSpeed = .4;
        this.runAcceleration = 0.35;
        this.crouchSpeed = 0.10;
        this.crouchAcceleration = 0.09;
        this.swimSpeed = 0.4;
        this.swimAcceleration = 0.1;
        this.flySpeed = 2;
        this.flyAcceleration = 2;
        this.jumpSpeedFactor = 0.85;
        this.jumpAccelerationFactor = 0.55;
        this.jumpPower = 0.96;
        this.doubleJumpPower = 0.9;
        this.freezedForwardDirection = null;
        this.moveState = Box3PlayerMoveState.FALL;
        this.walkState = Box3PlayerWalkState.NONE;
        this.swapInputDirection = false;
        this.reverseInputDirection = Box3InputDirection.NONE;
        this.disableInputDirection = Box3InputDirection.NONE;
        this.walkButton = false;
        this.crouchButton = false;
        this.jumpButton = false;
        this.enableAction0 = true;
        this.enableAction1 = true;
        this.action0Button = false;
        this.action1Button = false;
        this.enableJump = true;
        this.enableDoubleJump = true;
        this.enable3DCursor = false;
        this.facingDirection = new math_1.Box3Vector3(1, 0, 0);
        this.cameraPitch = 0;
        this.spawnSound = new Box3SoundEffect();
        this.jumpSound = new Box3SoundEffect();
        this.doubleJumpSound = new Box3SoundEffect();
        this.landSound = new Box3SoundEffect();
        this.crouchSound = new Box3SoundEffect();
        this.stepSound = new Box3SoundEffect();
        this.swimSound = new Box3SoundEffect();
        this.action0Sound = new Box3SoundEffect();
        this.action1Sound = new Box3SoundEffect();
        this.enterWaterSound = new Box3SoundEffect();
        this.leaveWaterSound = new Box3SoundEffect();
        this.startFlySound = new Box3SoundEffect();
        this.stopFlySound = new Box3SoundEffect();
        this.music = new Box3SoundEffect();
        this.muted = false;
        this.skinInvisible = {
            hips: false,
            torso: false,
            neck: false,
            head: false,
            leftShoulder: false,
            leftUpperArm: false,
            leftLowerArm: false,
            leftHand: false,
            rightShoulder: false,
            rightUpperArm: false,
            rightLowerArm: false,
            rightHand: false,
            leftUpperLeg: false,
            leftLowerLeg: false,
            leftFoot: false,
            rightUpperLeg: false,
            rightLowerLeg: false,
            rightFoot: false,
        };
    }
};

class Box3RaycastResult {
    constructor(hit, hitEntity, hitVoxel, origin, direction, distance, hitPosition, normal, voxelIndex) {
        this.hit = hit;
        this.hitEntity = hitEntity;
        this.hitVoxel = hitVoxel;
        this.origin = origin;
        this.direction = direction;
        this.distance = distance;
        this.hitPosition = hitPosition;
        this.normal = normal;
        this.voxelIndex = voxelIndex;
    }
};

class Box3EventHandlerToken {
    constructor(cancel, resume, active) {
        this.cancel = cancel;
        this.resume = resume;
        this.active = active;
    }
};

class Box3TickEvent {
    constructor(tick, prevTick, skip, elapsedTimeMS) {
        this.tick = tick;
        this.prevTick = prevTick;
        this.skip = skip;
        this.elapsedTimeMS = elapsedTimeMS;
    }
};

class Box3EntityEvent {
    constructor(tick, entity) {
        this.tick = tick;
        this.entity = entity;
    }
};

class Box3TriggerEvent {
    constructor(tick, entity) {
        this.tick = tick;
        this.entity = entity;
    }
};

class Box3DamageEvent {
    constructor(tick, entity, damage, attacker, damageType) {
        this.tick = tick;
        this.entity = entity;
        this.damage = damage;
        this.attacker = attacker;
        this.damageType = damageType;
    }
};

class Box3DieEvent {
    constructor(tick, entity, attacker, damageType) {
        this.tick = tick;
        this.entity = entity;
        this.attacker = attacker;
        this.damageType = damageType;
    }
};

class Box3RespawnEvent {
    constructor(tick, entity) {
        this.tick = tick;
        this.entity = entity;
    }
};

class Box3EntityContactEvent {
    constructor(tick, entity, other, axis, force) {
        this.tick = tick;
        this.entity = entity;
        this.other = other;
        this.axis = axis;
        this.force = force;
    }
};

class Box3VoxelContactEvent {
    constructor(tick, entity, x, y, z, voxel, axis, force) {
        this.tick = tick;
        this.entity = entity;
        this.x = x;
        this.y = y;
        this.z = z;
        this.voxel = voxel;
        this.axis = axis;
        this.force = force;
    }
};

class Box3FluidContactEvent {
    constructor(tick, entity, voxel) {
        this.tick = tick;
        this.entity = entity;
        this.voxel = voxel;
    }
};

class Box3ChatEvent {
    constructor(tick, entity, message) {
        this.tick = tick;
        this.entity = entity;
        this.message = message;
    }
};

class Box3InteractEvent {
    constructor(tick, entity, targetEntity) {
        this.tick = tick;
        this.entity = entity;
        this.targetEntity = targetEntity;
    }
};

class Box3InputEvent {
    constructor(tick, entity, position, button, pressed, raycast) {
        this.tick = tick;
        this.entity = entity;
        this.position = position;
        this.button = button;
        this.pressed = pressed;
        this.raycast = raycast;
    }
};

class Box3ClickEvent {
    constructor(tick, entity, clicker, button, distance, clickerPosition, raycast) {
        this.tick = tick;
        this.entity = entity;
        this.clicker = clicker;
        this.button = button;
        this.distance = distance;
        this.clickerPosition = clickerPosition;
        this.raycast = raycast;
    }
};

class Box3AnimationEvent {
    constructor(tick, target, animation, cancelled) {
        this.tick = tick;
        this.target = target;
        this.animation = animation;
        this.cancelled = cancelled;
    }
};

class Box3ResourceSystem {
    constructor(ls) {
        this.ls = ls;
    }
};

class Box3AssetListEntry {
    constructor(path, type) {
        this.path = path;
        this.type = type;
    }
};

class Box3Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static fromPolar(mag, phi, theta) {
        return new Box3Vector3(mag * Math.sin(theta) * Math.sin(phi), mag * Math.cos(theta), mag * Math.sin(theta) * Math.cos(phi));
    }
    set(x, y, z) {
        this.x = +x;
        this.y = +y;
        this.z = +z;
        return this;
    }
    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }
    add(v) {
        return new Box3Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    sub(v) {
        return new Box3Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    mul(v) {
        return new Box3Vector3(this.x * v.x, this.y * v.y, this.z * v.z);
    }
    div(v) {
        return new Box3Vector3(v.x === 0 ? 0 : this.x / v.x, v.y === 0 ? 0 : this.y / v.y, v.z === 0 ? 0 : this.z / v.z);
    }
    addEq(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }
    subEq(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }
    mulEq(v) {
        this.x *= v.x;
        this.y *= v.y;
        this.z *= v.z;
        return this;
    }
    divEq(v) {
        this.x = v.x === 0 ? 0 : this.x / v.x;
        this.y = v.y === 0 ? 0 : this.y / v.y;
        this.z = v.z === 0 ? 0 : this.z / v.z;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    cross(v) {
        return new Box3Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
    scale(n) {
        return new Box3Vector3(this.x * n, this.y * n, this.z * n);
    }
    clone() {
        return new Box3Vector3(this.x, this.y, this.z);
    }
    lerp(v, n) {
        return new Box3Vector3(this.x + (v.x - this.x) * n, this.y + (v.y - this.y) * n, this.z + (v.z - this.z) * n);
    }
    mag() {
        return Math.sqrt(this.dot(this));
    }
    sqrMag() {
        return this.dot(this);
    }
    towards(v) {
        return v.sub(this);
    }
    distance(v) {
        return this.sub(v).mag();
    }
    normalize() {
        const x = this.x;
        const y = this.y;
        const z = this.y;
        let r = x * x + y * y + z * z;
        if (r > 0) {
            r = 1 / Math.sqrt(r);
        }
        return new Box3Vector3(x * r, y * r, z * r);
    }
    angle(v) {
        let r = v.sqrMag() * this.sqrMag();
        if (r > 0) {
            r = 1 / Math.sqrt(r);
        }
        const cos = r * this.dot(v);
        if (1 < cos) {
            return 0;
        }
        else if (cos < -1) {
            return Math.PI;
        }
        else {
            return Math.acos(cos);
        }
    }
    max(v) {
        return new Box3Vector3(Math.max(this.x, v.x), Math.max(this.y, v.y), Math.max(this.z, v.z));
    }
    min(v) {
        return new Box3Vector3(Math.min(this.x, v.x), Math.min(this.y, v.y), Math.min(this.z, v.z));
    }
    exactEquals(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    }
    equals(v) {
        return (Math.abs(this.x - v.x) < EPSILON &&
            Math.abs(this.y - v.y) < EPSILON &&
            Math.abs(this.z - v.z) < EPSILON);
    }
    toString() {
        return `{ x:${this.x}, y:${this.y}, z:${this.z} }`;
    }
};

class Box3Quaternion {
    constructor(w, x, y, z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    static rotationBetween(a, b) {
        const dot = a.dot(b);
        let tmpvec3;
        if (dot < -0.999999) {
            tmpvec3 = new Box3Vector3(1, 0, 0).cross(a);
            if (tmpvec3.mag() < EPSILON) {
                tmpvec3 = new Box3Vector3(0, 1, 0).cross(a);
            }
            tmpvec3 = tmpvec3.normalize();
            return Box3Quaternion.fromAxisAngle(tmpvec3, Math.PI);
        }
        else if (dot > 0.999999) {
            return new Box3Quaternion(1, 0, 0, 0);
        }
        else {
            tmpvec3 = a.cross(b);
            return new Box3Quaternion(1 + dot, tmpvec3.x, tmpvec3.y, tmpvec3.z).normalize();
        }
    }
    static fromAxisAngle(axis, rad) {
        rad = rad * 0.5;
        const s = Math.sin(rad);
        return new Box3Quaternion(Math.cos(rad), s * axis.x, s * axis.y, s * axis.z);
    }
    static fromEuler(x, y, z) {
        const halfToRad = 0.5 * Math.PI / 180.0;
        x *= halfToRad;
        y *= halfToRad;
        z *= halfToRad;
        const sx = Math.sin(x);
        const cx = Math.cos(x);
        const sy = Math.sin(y);
        const cy = Math.cos(y);
        const sz = Math.sin(z);
        const cz = Math.cos(z);
        return new Box3Quaternion(cx * cy * cz + sx * sy * sz, sx * cy * cz - cx * sy * sz, cx * sy * cz + sx * cy * sz, cx * cy * sz - sx * sy * cz);
    }
    set(w, x, y, z) {
        this.w = w;
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }
    copy(q) {
        this.w = q.w;
        this.x = q.x;
        this.y = q.y;
        this.z = q.z;
        return this;
    }
    getAxisAngle(_q) {
        const q = _q.normalize();
        const angle = Math.acos(q.w) * 2.0;
        const s = Math.sin(angle / 2.0);
        let axis;
        if (s > EPSILON) {
            axis = new Box3Vector3(q.x / s, q.y / s, q.z / s);
        }
        else {
            axis = new Box3Vector3(1, 0, 0);
        }
        return { axis, angle };
    }
    rotateX(_rad) {
        const aw = this.w;
        const ax = this.x;
        const ay = this.y;
        const az = this.z;
        const rad = 0.5 * _rad;
        const bx = Math.sin(rad);
        const bw = Math.cos(rad);
        return new Box3Quaternion(aw * bw - ax * bx, ax * bw + aw * bx, ay * bw + az * bx, az * bw - ay * bx);
    }
    rotateY(_rad) {
        const aw = this.w;
        const ax = this.x;
        const ay = this.y;
        const az = this.z;
        const rad = 0.5 * _rad;
        const by = Math.sin(rad);
        const bw = Math.cos(rad);
        return new Box3Quaternion(aw * bw - ay * by, ax * bw - az * by, ay * bw + aw * by, az * bw + ax * by);
    }
    rotateZ(_rad) {
        const aw = this.w;
        const ax = this.x;
        const ay = this.y;
        const az = this.z;
        const rad = 0.5 * _rad;
        const bz = Math.sin(rad);
        const bw = Math.cos(rad);
        return new Box3Quaternion(aw * bw - az * bz, ax * bw + ay * bz, ay * bw - ax * bz, az * bw + aw * bz);
    }
    dot(q) {
        return this.w * q.w + this.x * q.x + this.y * q.y + this.z * q.z;
    }
    add(v) {
        return new Box3Quaternion(this.w + v.w, this.x + v.x, this.y + v.y, this.z + v.z);
    }
    sub(v) {
        return new Box3Quaternion(this.w - v.w, this.x - v.x, this.y - v.y, this.z - v.z);
    }
    angle(q) {
        const dotproduct = this.dot(q);
        return Math.acos(2 * dotproduct * dotproduct - 1);
    }
    mul(q) {
        const ax = this.x;
        const ay = this.y;
        const az = this.z;
        const aw = this.w;
        const bx = q.x;
        const by = q.y;
        const bz = q.z;
        const bw = q.w;
        return new Box3Quaternion(aw * bw - ax * bx - ay * by - az * bz, ax * bw + aw * bx + ay * bz - az * by, ay * bw + aw * by + az * bx - ax * bz, az * bw + aw * bz + ax * by - ay * bx);
    }
    inv() {
        const a0 = this.x;
        const a1 = this.y;
        const a2 = this.z;
        const a3 = this.w;
        const dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
        let r = dot;
        if (Math.abs(r) > EPSILON) {
            r = 1 / r;
        }
        return new Box3Quaternion(a3 * r, -a0 * r, -a1 * r, -a2 * r);
    }
    div(q) {
        return this.mul(q.inv());
    }
    slerp(q, n) {
        const aw = this.w;
        const ax = this.x;
        const ay = this.y;
        const az = this.z;
        let bw = q.w;
        let bx = q.x;
        let by = q.y;
        let bz = q.z;
        let omega;
        let cosomg;
        let sinomg;
        let scale0;
        let scale1;
        cosomg = ax * bx + ay * by + az * bz + aw * bw;
        if (cosomg < 0.0) {
            cosomg = -cosomg;
            bx = -bx;
            by = -by;
            bz = -bz;
            bw = -bw;
        }
        if (1.0 - cosomg > EPSILON) {
            omega = Math.acos(cosomg);
            sinomg = Math.sin(omega);
            scale0 = Math.sin((1.0 - n) * omega) / sinomg;
            scale1 = Math.sin(n * omega) / sinomg;
        }
        else {
            scale0 = 1.0 - n;
            scale1 = n;
        }
        return new Box3Quaternion(scale0 * aw + scale1 * bw, scale0 * ax + scale1 * bx, scale0 * ay + scale1 * by, scale0 * az + scale1 * bz);
    }
    mag() {
        return Math.sqrt(this.dot(this));
    }
    sqrMag() {
        return this.dot(this);
    }
    normalize() {
        const w = this.w;
        const x = this.x;
        const y = this.y;
        const z = this.z;
        let r = this.dot(this);
        if (r > 0) {
            r = 1 / Math.sqrt(r);
        }
        return new Box3Quaternion(r * w, r * x, r * y, r * z);
    }
    equals(q) {
        return (Math.abs(this.w - q.w) < EPSILON &&
            Math.abs(this.x - q.x) < EPSILON &&
            Math.abs(this.y - q.y) < EPSILON &&
            Math.abs(this.z - q.z) < EPSILON);
    }
    clone() {
        return new Box3Quaternion(this.w, this.x, this.y, this.z);
    }
    toString() {
        return `{ w:${this.w}, x:${this.x}, y:${this.y}, z:${this.z} }`;
    }
};

class Box3Bounds3 {
    constructor(lo, hi) {
        this.lo = lo;
        this.hi = hi;
    }
    static fromPoints(...points) {
        const lo = new Box3Vector3(Infinity, Infinity, Infinity);
        const hi = new Box3Vector3(-Infinity, -Infinity, -Infinity);
        for (let i = 0; i < points.length; ++i) {
            const p = points[i];
            lo.x = Math.min(lo.x, p.x);
            lo.y = Math.min(lo.y, p.y);
            lo.z = Math.min(lo.z, p.z);
            hi.x = Math.max(hi.x, p.x);
            hi.y = Math.max(hi.y, p.y);
            hi.z = Math.max(hi.z, p.z);
        }
        return new Box3Bounds3(lo, hi);
    }
    intersect(b) {
        return new Box3Bounds3(this.lo.max(b.lo), this.hi.min(b.hi));
    }
    contains(b) {
        return !(b.x < this.lo.x ||
            b.x > this.hi.x ||
            b.y < this.lo.y ||
            b.y > this.hi.y ||
            b.z < this.lo.z ||
            b.z > this.hi.z);
    }
    containsBounds(b) {
        return !(b.lo.x < this.lo.x ||
            b.hi.x > this.hi.x ||
            b.lo.y < this.lo.y ||
            b.hi.y > this.hi.y ||
            b.lo.z < this.lo.z ||
            b.hi.z > this.hi.z);
    }
    intersects(b) {
        return (this.lo.x < b.hi.x &&
            b.lo.x < this.hi.x &&
            this.lo.y < b.hi.y &&
            b.lo.y < this.hi.y &&
            this.lo.z < b.hi.z &&
            b.lo.z < this.hi.z);
    }
    set(lox, loy, loz, hix, hiy, hiz) {
        this.lo.x = lox;
        this.lo.y = loy;
        this.lo.z = loz;
        this.hi.x = hix;
        this.hi.y = hiy;
        this.hi.z = hiz;
        return this;
    }
    copy(b) {
        this.lo.copy(b.lo);
        this.hi.copy(b.hi);
        return this;
    }
    toString() {
        return `{ lo:${this.lo.toString()}, hi:${this.hi.toString()} }`;
    }
};

class Box3RGBAColor {
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    set(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        return this;
    }
    copy(c) {
        this.r = c.r;
        this.g = c.g;
        this.b = c.b;
        this.a = c.a;
        return this;
    }
    add(rgba) {
        return new Box3RGBAColor(this.r + rgba.r, this.g + rgba.g, this.b + rgba.b, this.a + rgba.a);
    }
    sub(rgba) {
        return new Box3RGBAColor(this.r - rgba.r, this.g - rgba.g, this.b - rgba.b, this.a - rgba.a);
    }
    mul(rgba) {
        return new Box3RGBAColor(this.r * rgba.r, this.g * rgba.g, this.b * rgba.b, this.a * rgba.a);
    }
    div(rgba) {
        return new Box3RGBAColor(rgba.r === 0 ? 0 : this.r / rgba.r, rgba.g === 0 ? 0 : this.g / rgba.g, rgba.b === 0 ? 0 : this.b / rgba.b, rgba.a === 0 ? 0 : this.a / rgba.a);
    }
    addEq(rgba) {
        this.r += rgba.r;
        this.g += rgba.g;
        this.b += rgba.b;
        this.a += rgba.a;
        return this;
    }
    subEq(rgba) {
        this.r -= rgba.r;
        this.g -= rgba.g;
        this.b -= rgba.b;
        this.a -= rgba.a;
        return this;
    }
    mulEq(rgba) {
        this.r *= rgba.r;
        this.g *= rgba.g;
        this.b *= rgba.b;
        this.a *= rgba.a;
        return this;
    }
    divEq(rgba) {
        this.r = rgba.r === 0 ? 0 : this.r / rgba.r;
        this.g = rgba.g === 0 ? 0 : this.g / rgba.g;
        this.b = rgba.b === 0 ? 0 : this.b / rgba.b;
        this.a = rgba.a === 0 ? 0 : this.a / rgba.a;
        return this;
    }
    lerp(rgba, n) {
        return new Box3RGBAColor(this.r + (rgba.r - this.r) * n, this.g + (rgba.g - this.g) * n, this.b + (rgba.b - this.b) * n, this.a + (rgba.a - this.a) * n);
    }
    blendEq(rgb) {
        const a = this.a;
        const c = 1.0 - a;
        return new Box3RGBColor(c * rgb.r + a * this.r, c * rgb.g + a * this.g, c * rgb.b + a * this.b);
    }
    equals(rgba) {
        return (Math.abs(this.r - rgba.r) < EPSILON &&
            Math.abs(this.g - rgba.g) < EPSILON &&
            Math.abs(this.b - rgba.b) < EPSILON &&
            Math.abs(this.a - rgba.a) < EPSILON);
    }
    clone() {
        return new Box3RGBAColor(this.r, this.g, this.b, this.a);
    }
    toString() {
        return `{ r:${this.r}, g:${this.g}, b:${this.b}, a:${this.a} }`;
    }
};

class Box3RGBColor {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    static random() {
        return new Box3RGBColor(Math.random(), Math.random(), Math.random());
    }
    set(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        return this;
    }
    copy(c) {
        this.r = c.r;
        this.g = c.g;
        this.b = c.b;
        return this;
    }
    add(rgb) {
        return new Box3RGBColor(this.r + rgb.r, this.g + rgb.g, this.b + rgb.b);
    }
    sub(rgb) {
        return new Box3RGBColor(this.r - rgb.r, this.g - rgb.g, this.b - rgb.b);
    }
    mul(rgb) {
        return new Box3RGBColor(this.r * rgb.r, this.g * rgb.g, this.b * rgb.b);
    }
    div(rgb) {
        return new Box3RGBColor(rgb.r === 0 ? 0 : this.r / rgb.r, rgb.g === 0 ? 0 : this.g / rgb.g, rgb.b === 0 ? 0 : this.b / rgb.b);
    }
    addEq(rgb) {
        this.r += rgb.r;
        this.g += rgb.g;
        this.b += rgb.b;
        return this;
    }
    subEq(rgb) {
        this.r -= rgb.r;
        this.g -= rgb.g;
        this.b -= rgb.b;
        return this;
    }
    mulEq(rgb) {
        this.r *= rgb.r;
        this.g *= rgb.g;
        this.b *= rgb.b;
        return this;
    }
    divEq(rgb) {
        this.r = rgb.r === 0 ? 0 : this.r / rgb.r;
        this.g = rgb.g === 0 ? 0 : this.g / rgb.g;
        this.b = rgb.b === 0 ? 0 : this.b / rgb.b;
        return this;
    }
    lerp(rgb, n) {
        return new Box3RGBColor(this.r + (rgb.r - this.r) * n, this.g + (rgb.g - this.g) * n, this.b + (rgb.b - this.b) * n);
    }
    equals(rgb) {
        return (Math.abs(this.r - rgb.r) < EPSILON &&
            Math.abs(this.g - rgb.g) < EPSILON &&
            Math.abs(this.b - rgb.b) < EPSILON);
    }
    clone() {
        return new Box3RGBColor(this.r, this.g, this.b);
    }
    toRGBA() {
        return new Box3RGBAColor(this.r, this.g, this.b, 1.0);
    }
    toString() {
        return `{ r:${this.r}, g:${this.g}, b:${this.b} }`;
    }
};

class Box3Database {
    constructor(sql) {
        this.sql = sql;
    }
};

class Box3QueryResult {
    constructor(next, abort, error, then) {
        this.next = next;
        this['return'] = abort;
        this['throw'] = error;
        this['then'] = then;
    }
    [Symbol.asyncIterator]() {
        return this;
    }
};

class Box3HttpFetchResponse {
    constructor(status, statusText, json, text, arrayBuffer, close) {
        this.status = status;
        this.statusText = statusText;
        this.json = json;
        this.text = text;
        this.arrayBuffer = arrayBuffer;
        this.close = close;
    }
    get ok() {
        return 200 <= this.status && this.status < 300;
    }
};

class Box3HttpRequest { };

class Box3HttpResponse { };

class Box3HttpAPI {
    constructor(url, fetch, onRequest) {
        this.url = url;
        this.fetch = fetch;
        this.onRequest = onRequest;
    }
};

class URLSearchParams {
    constructor(args) {
        let init = '';
        if (args instanceof URLSearchParams) {
            init = '' + args.toString();
        }
        else if (typeof args === 'string') {
            init = args;
        }
        Object.defineProperties(this, {
            [ENTRIES]: {
                enumerable: false,
                writable: false,
                value: [],
            },
        });
        const attributes = init.replace(/^\?/, '').split('&');
        for (let i = 0; i < attributes.length; i++) {
            const attribute = attributes[i].split('=');
            this.append(decodeURIComponent('' + attribute[0]), (attribute.length > 1) ? decodeURIComponent(attribute[1]) : '');
        }
        if (typeof args === 'object') {
            if (Array.isArray(args)) {
                args.forEach((item) => this.append(item[0], item[1]));
            }
            else {
                Object.keys(args).forEach((key) => this.append(key, args[key]));
            }
        }
    }
    append(name, value) {
        value = '' + value;
        name = '' + name;
        if (name) {
            this[ENTRIES].push({ key: name, value });
        }
    }
    delete(name) {
        name = '' + name;
        let ptr = 0;
        for (let i = 0; i < this[ENTRIES].length; ++i) {
            if (this[ENTRIES][i].key !== name) {
                this[ENTRIES][ptr++] = this[ENTRIES][i];
            }
        }
        this[ENTRIES].length = ptr;
    }
    get(name) {
        name = '' + name;
        for (let i = 0; i < this[ENTRIES].length; ++i) {
            if (this[ENTRIES][i].key === name) {
                return this[ENTRIES][i].value;
            }
        }
        return null;
    }
    getAll(name) {
        const result = [];
        name = '' + name;
        for (let i = 0; i < this[ENTRIES].length; ++i) {
            if (this[ENTRIES][i].key === name) {
                result.push(this[ENTRIES][i].value);
            }
        }
        return result;
    }
    forEach(callback) {
        for (let i = 0; i < this[ENTRIES].length; ++i) {
            const entry = this[ENTRIES][i];
            callback.call(this, entry.value, entry.key, this);
        }
    }
    has(name) {
        return this.get(name) !== null;
    }
    set(name, value) {
        this.delete(name);
        this.append(name, value);
    }
    keys() {
        const items = [];
        this.forEach(function (_, key) { items.push(key); });
        return items[Symbol.iterator]();
    }
    values() {
        const items = [];
        this.forEach(function (value) { items.push(value); });
        return items[Symbol.iterator]();
    }
    entries() {
        const items = [];
        this.forEach(function (value, name) { items.push([name, value]); });
        return items[Symbol.iterator]();
    }
    sort() {
        this[ENTRIES].sort((a, b) => strcmp(a.key, b.key) || strcmp(a.value, b.value));
    }
    toString() {
        let searchString = '';
        this.forEach(function (value, name) {
            if (searchString.length > 0) {
                searchString += '&';
            }
            searchString += encodeQueryComponent(name) + '=' + encodeQueryComponent(value);
        });
        return searchString;
    }
    [Symbol.iterator]() {
        return this.entries();
    }
};

class URL {
    constructor(url, base = '') {
        const baseParts = parse(base);
        let urlParts = parse(url);
        if (!urlParts.protocol) {
            urlParts = {
                protocol: baseParts.protocol,
                username: baseParts.username,
                password: baseParts.password,
                hostname: baseParts.hostname,
                port: baseParts.port,
                path: urlParts.path || baseParts.path,
                query: urlParts.query || baseParts.query,
                hash: urlParts.hash,
            };
        }
        Object.defineProperty(this, PARTS, {
            value: urlParts,
            writable: false,
            enumerable: false,
        });
    }
    get hash() {
        return this[PARTS].hash;
    }
    set hash(value) {
        value = '' + value;
        if (value.length === 0) {
            this[PARTS].hash = '';
        }
        else {
            if (value.charAt(0) !== '#') {
                value = '#' + value;
            }
            this[PARTS].hash = '#' + encodeURIComponent(value.substr(1));
        }
    }
    get host() {
        return this.hostname + (this.port ? (':' + this.port) : '');
    }
    set host(value) {
        const url = new URL('http://' + value);
        this[PARTS].hostname = url.hostname;
        this[PARTS].port = url.port;
    }
    get hostname() {
        return this[PARTS].hostname;
    }
    set hostname(value) {
        value = value.toString();
        this[PARTS].hostname = encodeURIComponent(value);
    }
    get port() {
        return this[PARTS].port;
    }
    set port(value) {
        const port = parseInt('' + value);
        if (isNaN(port)) {
            this[PARTS].port = '';
        }
        else {
            this[PARTS].port = Math.max(0, port % (1 << 16)).toString();
        }
    }
    get href() {
        const authentication = (this.username || this.password) ? (this.username + (this.password ? (':' + this.password) : '') + '@') : '';
        return this.protocol + '//' + authentication + this.host + this.pathname + this.search + this.hash;
    }
    set href(value) {
        Object.assign(this[PARTS], parse(value));
    }
    get origin() {
        return this.protocol + '//' + this.host;
    }
    get username() {
        return this[PARTS].username;
    }
    set username(value) {
        value = value.toString();
        this[PARTS].username = encodeURIComponent(value);
    }
    get password() {
        return this[PARTS].password;
    }
    set password(value) {
        this[PARTS].password = encodeURIComponent('' + value);
    }
    get pathname() {
        return this[PARTS].path || '/';
    }
    set pathname(value) {
        value = '' + value;
        if ((value.length === 0) || (value.charAt(0) !== '/')) {
            value = '/' + value;
        }
        this[PARTS].path = encodeURIComponent(value).replace(/\%2[fF]/g, '/');
    }
    get protocol() {
        return this[PARTS].protocol + ':';
    }
    set protocol(value) {
        value = ('' + value) || 'http';
        if (value.charAt(value.length - 1) === ':') {
            value = value.slice(0, -1);
        }
        this[PARTS].protocol = encodeURIComponent(value);
    }
    get search() {
        const s = this[PARTS].query.toString();
        if (s) {
            return '?' + s;
        }
        return s;
    }
    set search(value) {
        const params = new URLSearchParams(value);
        const prev = this[PARTS].query[ENTRIES];
        const next = params[ENTRIES];
        prev.length = 0;
        prev.push.apply(prev, next);
    }
    get searchParams() {
        return this[PARTS].query;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
};